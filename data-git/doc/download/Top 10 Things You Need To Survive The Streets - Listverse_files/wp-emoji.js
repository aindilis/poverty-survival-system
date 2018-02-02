(function(window,settings){function wpEmoji(){var MutationObserver=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,document=window.document,twemoji,timer,loaded=false,count=0,ie11=window.navigator.userAgent.indexOf('Trident/7.0')>0;function browserSupportsSvgAsImage(){if(!!document.implementation.hasFeature){return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image','1.1');}
return true;}
function load(){if(loaded){return;}
if(typeof window.twemoji==='undefined'){if(count>600){return;}
window.clearTimeout(timer);timer=window.setTimeout(load,50);count++;return;}
twemoji=window.twemoji;loaded=true;if(MutationObserver){new MutationObserver(function(mutationRecords){var i=mutationRecords.length,addedNodes,removedNodes,ii,node;while(i--){addedNodes=mutationRecords[i].addedNodes;removedNodes=mutationRecords[i].removedNodes;ii=addedNodes.length;if(ii===1&&removedNodes.length===1&&addedNodes[0].nodeType===3&&removedNodes[0].nodeName==='IMG'&&addedNodes[0].data===removedNodes[0].alt&&'load-failed'===removedNodes[0].getAttribute('data-error')){return;}
while(ii--){node=addedNodes[ii];if(node.nodeType===3){if(!node.parentNode){continue;}
if(ie11){while(node.nextSibling&&3===node.nextSibling.nodeType){node.nodeValue=node.nodeValue+ node.nextSibling.nodeValue;node.parentNode.removeChild(node.nextSibling);}}
node=node.parentNode;}
if(!node||node.nodeType!==1||(node.className&&typeof node.className==='string'&&node.className.indexOf('wp-exclude-emoji')!==-1)){continue;}
if(test(node.textContent)){parse(node);}}}}).observe(document.body,{childList:true,subtree:true});}
parse(document.body);}
function test(text){var single=/[\u203C\u2049\u20E3\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2300\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638\u2639\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692\u2693\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753\u2754\u2755\u2757\u2763\u2764\u2795\u2796\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05\u2B06\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]/,pair=/[\uDC00-\uDFFF]/;if(text){return pair.test(text)||single.test(text);}
return false;}
function parse(object,args){var params;if(settings.supports.everything||!twemoji||!object||('string'!==typeof object&&(!object.childNodes||!object.childNodes.length))){return object;}
args=args||{};params={base:browserSupportsSvgAsImage()?settings.svgUrl:settings.baseUrl,ext:browserSupportsSvgAsImage()?settings.svgExt:settings.ext,className:args.className||'emoji',callback:function(icon,options){switch(icon){case'a9':case'ae':case'2122':case'2194':case'2660':case'2663':case'2665':case'2666':return false;}
if(settings.supports.everythingExceptFlag&&!/^1f1(?:e[6-9a-f]|f[0-9a-f])-1f1(?:e[6-9a-f]|f[0-9a-f])$/.test(icon)&&!/^(1f3f3-fe0f-200d-1f308|1f3f4-200d-2620-fe0f)$/.test(icon)){return false;}
return''.concat(options.base,icon,options.ext);},onerror:function(){if(twemoji.parentNode){this.setAttribute('data-error','load-failed');twemoji.parentNode.replaceChild(document.createTextNode(twemoji.alt),twemoji);}}};if(typeof args.imgAttr==='object'){params.attributes=function(){return args.imgAttr;};}
return twemoji.parse(object,params);}
if(settings){if(settings.DOMReady){load();}else{settings.readyCallback=load;}}
return{parse:parse,test:test};}
window.wp=window.wp||{};window.wp.emoji=new wpEmoji();})(window,window._wpemojiSettings);