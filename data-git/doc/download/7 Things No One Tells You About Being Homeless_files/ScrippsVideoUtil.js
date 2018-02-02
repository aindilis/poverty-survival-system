var ScrippsVideoUtil = {

	scrollThreshold : 500,
    processedEmbeds : [],
	embedSelector : ".scrippsVideoEmbed",

	feedUrl : null,
	continuousVideos : [],
	removeAlreadyWatched : false,


	utils : {
		storySelector : ".module--story",
		defaultAjaxUrlParams : "?startFrom=1&displayNum=50&videos=true",
		defaultThumbWidth : 320,
		defaultThumbHeight : 240,

		getThumbUrl : function(url, width, height){
			if(!width || !height){
				width = this.defaultThumbWidth;
				height = this.defaultThumbHeight;
			}

			//parse the size out of the url
			var idx = url.lastIndexOf("_");
			idx = url.lastIndexOf("_", idx - 1);
			return url.substring(0, idx) + "_" + width + "_" + height + ".jpg";
		},

		concatPlaylists : function(p1, p2){
			var len = p2.length;
			for(var i = 0; i < len; i++){
				p1.push(p2[i]);
			}
			return p1;
		}
	},

	getVideosFromFeed : function(config){
		if(!this.feedUrl){
			if(config.ajaxUrl){
				this.feedUrl = config.ajaxUrl;
			}
			else{ //get the url from the module--story
				var ajaxUrl = $(this.utils.storySelector).data("ajaxurl");
				if(ajaxUrl){
					this.feedUrl = ajaxUrl;
				}
			}
		}

		var url = this.feedUrl;
		if(!config.doNotAppendParams){ 
			url += this.utils.defaultAjaxUrlParams;
		}

		$.ajax({ 
            type: "GET", 
            dataType: "html", 
            url: url, 
            success:function(data) { 
				if(config.callback) { 
					ScrippsVideoUtil.addContinuousVideoData(data);
					config.callback({
						data : data,
						continuousVideos : ScrippsVideoUtil.continuousVideos
					});
				};
            },
            error: function(xhr, status, error) { }
        });
	},


	addContinuousVideoData : function(data){
		var $videos = $(data).find(".video");
		$videos.each(function(){
			var addToArray = true;
			var $this = $(this);
			var vidUrl = $this.find(".videoUrl").text();
			if(ScrippsVideoUtil.removeAlreadyWatched){
				var tmpUrl = vidUrl;
				tmpUrl = (tmpUrl.lastIndexOf ? tmpUrl.substring(tmpUrl.lastIndexOf("/") + 1) : tmpUrl);
				addToArray = ScrippsHistoryCache.indexOfUrl(tmpUrl) == -1;
			}

			if(addToArray){
				ScrippsVideoUtil.continuousVideos.push({
		            thumbSrc : ScrippsVideoUtil.utils.getThumbUrl($this.find(".thumbnail").text()),
		            vidTitle : $this.find(".title").text(),
		            vidUrl : vidUrl,
		            vidPosterUrl : $this.find(".thumbnail").text(),
		            isContinuous : true
		        });
			}
		});
	},

	getContinousVideos : function(config){
		if(this.continuousVideos.length == 0){
			this.getVideosFromFeed(config);
		}
		else{
			config.callback({continuousVideos : this.continuousVideos});
		}
	},

	init : function(){

		var self = this;

        //start checking the page for video emebed elements
        this.pollInt = setInterval(function(){
            ScrippsVideoUtil.checkAndDisplayEmbed();
        }, 500);
        ScrippsVideoUtil.checkAndDisplayEmbed();

        $(function(){
			clearInterval(ScrippsVideoUtil.pollInt);
            ScrippsVideoUtil.checkAndDisplayEmbed();

            //wait until the user scrolls to the iframe to load it
            if(self.processedEmbeds.length > 0){
                var scrollTimeout = null;
                $(window).bind("scroll.embedVideo", function(){
                	clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(function(){
                    	self.checkAndDisplayEmbedIframe();
                    }, 50);
                });
                self.checkAndDisplayEmbedIframe();
            }
        });
    },

    //because the cms editor doesn't like json...
    convertStringToJson : function(str){
    	
		if(str.indexOf('"') == -1){
			var strArray = [];
			var sSplit = str.split(",");
			for(var i = 0; i < sSplit.length; i++){
				var tmp = sSplit[i].split(":");
				strArray.push('"' + tmp[0] + '":"' + tmp[1] + (tmp[2] ? ":" + tmp[2] : "") + '"');
			}
			str = "{" + strArray.join(",") + "}";
		}

    	try{
    		return JSON.parse(str);
    	}
    	catch(e){
    		return null;
    	}
    },

    //used for adding the iframe source to the container element
    checkAndDisplayEmbedIframe : function(){
    	var len = this.processedEmbeds.length;
        if(len > 0){
            var wHeight = $(window).height();
            for(var i = len - 1; i >= 0; i--){
                var top = this.processedEmbeds[i].container.getBoundingClientRect().top;
                if(wHeight + this.scrollThreshold >= top){
                    this.processedEmbeds[i].container.innerHTML = this.processedEmbeds[i].embedHtml;
                    this.processedEmbeds.splice(i,1);
                }
            }
        }
        else{
        	$(window).unbind("scroll.embedVideo");
        }
    },

    checkAndDisplayEmbed : function(){
        var elements = document.querySelectorAll(this.embedSelector);
        for(var i = 0; i < elements.length; i++){
            elements[i].className += "-processed";
            var json = elements[i].getAttribute("data-json");
            json = this.convertStringToJson(json);
            if(json){
                elements[i].innerHTML = this.getIframePlacerholderCode();

                this.processedEmbeds.push({ container : elements[i], embedHtml : this.getIframeEmbedCode(json) });
            }
        }
    },

    //to delay the loading of the iframe but still insert a loading / spacer div so the page doesn't jump when loaded
    getIframePlacerholderCode : function(){
        return '<div class="scripps_iframe_embed" style="position:relative;"><div style="display:block;width:100%;height:auto;padding-bottom:56.25%;text-align:center;">Loading video...</div></div>';
    },

	getIframeEmbedCode : function(config){
		var src = "http://media.scrippsnationalnews.com/cms/videoIframe.html?";

		
		if(config.anvatoId){
			src += "aid=" + config.anvatoId;
		}
		else if(config.videoUrl){
			src += "vurl=" + config.videoUrl + "&vpost=" + config.videoPosterUrl;
		}
		
		//get the site based on the host
		if(!config.site){
			if(window.jsCallLetters){
				var tmp = window.jsCallLetters;

				//to make the call letters less confusing
				tmp = (window.location.host == "www.tmj4.com" ? "tmj4" : tmp);
				tmp = (window.location.host == "www.wtmj.com" ? "wtmj" : tmp);

				config.site = tmp.toLowerCase();
			}
			else{ //use the domain (without the www. and the top level domain)
				var s = location.hostname.split('.');
				config.site = s[s.length - 2];
			}
		}

		if(config.title){
			src += "&title=" + encodeURIComponent(config.title);
		}

		if(config.da){  //to disable ads
			src += "&da=" + config.da;
		}

		if(window.videoAdSrcKeywords){
			src += "&kw=" + encodeURIComponent(window.videoAdSrcKeywords);
		}
		
		if(config.autoplay){
			src += "&autoplay=" + config.autoplay;
		}
		if(config.vid){
			src += "&vid=" + config.vid;
		}
		if(config.live){
			src += "&live=1";
		}

		if(config.purl){
			src += "&purl=" + config.purl;
		}
		else{
			if(config.site == "cracked"){ //exception for cracked
				var metaTags = document.getElementsByTagName("meta");
				var siteCategory = "";
				for(var i = 0; i < metaTags.length; i++){
					if(metaTags[i].getAttribute("name") == "category"){
						siteCategory = metaTags[i].getAttribute("content").toLowerCase().replace(/ /g, "-");
						break;
					}
				}
				src += "&purl=/" + encodeURIComponent(siteCategory) + window.location.pathname;					
			}
			else{
				src += "&purl=" + window.location.pathname;
			}
		}

		var isStoryEle = document.querySelectorAll("meta[name='isStory']")[0];
		var isArticleEle = document.querySelectorAll("meta[property='og:type']")[0];

		if( (isStoryEle && isStoryEle.getAttribute("content") == "true") || (isArticleEle && isArticleEle.getAttribute("content") == "article") ){
		//if($("meta[name='isStory']").attr("content") == "true" || $("meta[property='og:type']").attr("content") == "article"){
			src += "&story=1";
		}
		else{
			src += "&story=0";	
		}

		if(config.muteOnLoad){
			src += "&mute=1";
		}

		if(config.overrideTitle && config.overrideTitle != ""){
			src += "&otitle=1";
		}

		if(config.ex){
			src += "&ex=1";			
		}

		src += "&s=" + config.site;

		var iframeHtml = '<div class="scripps_iframe_embed" style="position:relative;"><div style="display:block;width:100%;height:auto;padding-bottom:56.25%;"></div><iframe style="position:absolute;top:0;left:0;width:100%; height:100%;" border="0" height="100%" frameborder="0" webkitallowfullscreen="" allowfullscreen="" mozallowfullscreen="" scrolling="no" scrolling="no" src="' + src + '"></iframe></div>';

		return iframeHtml;
	},

	embedVideo : function(config){
		document.write(this.getIframeEmbedCode(config));
	}
};
ScrippsVideoUtil.init();