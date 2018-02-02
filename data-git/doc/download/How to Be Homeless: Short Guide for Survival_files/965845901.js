if (typeof window.awf_Form_=='undefined') window.awf_Form_ = new Object();
awf_Form_.isPreview = false;
awf_Form_.setCookie = function(name, value, expires, path, domain, secure) {
    var curCookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
    document.cookie = curCookie;
}

awf_Form_.getCookie = function(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    } else
        begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1)
        end = dc.length;
    return unescape(dc.substring(begin + prefix.length, end));
}
awf_Form_.showForm = function() {
    /*@cc_on
    /*@if (@_jscript_version > 5.5)
           var isIE = true;
      @else
           var deprecatedBrowser = true;
      @end @*/
    if (typeof isIE == 'undefined') {
        var isIE = false;
    }
    if (!isIE && !window.XMLHttpRequest) {
        var deprecatedBrowser = true;
    }

    // Exit early for TY Landing Page option
    if (document.location.href.indexOf('meta_web_form_id') > 0) return;

    if (deprecatedBrowser) {
       window.open('https://forms.aweber.com/form/01/965845901.html','winPopUp','resizable=1,scrollbars=1,location=0,width=418,height=273');
       awf_Form_.setExpirationCookie();
       return true;
    }
    if (typeof awf_Form_.scriptAppended=='undefined') {
        try {
            var script = document.createElement('script');
            script.src = "https://forms.aweber.com/form/styled_popovers_and_lightboxes.js";
            script.type = 'text/javascript';
            document.getElementsByTagName('HEAD')[0].appendChild(script);
        } catch(e) {
            //IE5 for Mac and IE timeout issues
            try {
                document.write('<script type="text/javascript" src="' + src + '"></scr'+'ipt>');
            } catch(e) { }
        }
        awf_Form_.scriptAppended = true;
    }
    var loadForm = function() {
        awf_Form_.form = new awf_Form_.AWFormGenerator( {"_log":null,"id":"965845901","form":"<form method=\"post\" class=\"af-form-wrapper\" accept-charset=\"UTF-8\" action=\"https:\/\/www.aweber.com\/scripts\/addlead.pl\"  >\n<div style=\"display: none;\">\n<input type=\"hidden\" name=\"meta_web_form_id\" value=\"965845901\" \/>\n<input type=\"hidden\" name=\"meta_split_id\" value=\"\" \/>\n<input type=\"hidden\" name=\"listname\" value=\"awlist4218941\" \/>\n<input type=\"hidden\" name=\"redirect\" value=\"\" id=\"redirect_09f6c4b4e7aea98a82bf7d3a78e02c93\" \/>\n\n<input type=\"hidden\" name=\"meta_adtracking\" value=\"E-Book_SM\" \/>\n<input type=\"hidden\" name=\"meta_message\" value=\"1\" \/>\n<input type=\"hidden\" name=\"meta_required\" value=\"name,email\" \/>\n\n<input type=\"hidden\" name=\"meta_tooltip\" value=\"\" \/>\n<\/div>\n<div id=\"af-form-965845901\" class=\"af-form\"><div id=\"af-header-965845901\" class=\"af-header\"><div class=\"bodyText\"><h3 style=\"text-align: center;\"><span style=\"font-family: arial,helvetica,sans-serif; font-size: 24px;\"><strong><span style=\"color: #ffffff;\">E-Book Sending Confirmation<\/span><\/strong><\/span><\/h3><\/div><\/div>\n<div id=\"af-body-965845901\" class=\"af-body af-standards\">\n<div class=\"af-element\">\n<label class=\"previewLabel\" for=\"awf_field-81097392\">Full Name: <\/label>\n<div class=\"af-textWrap\">\n<input id=\"awf_field-81097392\" type=\"text\" name=\"name\" class=\"text\" value=\"\"  onfocus=\" if (this.value == '') { this.value = ''; }\" onblur=\"if (this.value == '') { this.value='';} \" tabindex=\"500\" \/>\n<\/div>\n<div class=\"af-clear\"><\/div><\/div>\n<div class=\"af-element\">\n<label class=\"previewLabel\" for=\"awf_field-81097393\">Your E-mail: <\/label>\n<div class=\"af-textWrap\"><input class=\"text\" id=\"awf_field-81097393\" type=\"text\" name=\"email\" value=\"\" tabindex=\"501\" onfocus=\" if (this.value == '') { this.value = ''; }\" onblur=\"if (this.value == '') { this.value='';} \" \/>\n<\/div><div class=\"af-clear\"><\/div>\n<\/div>\n<div class=\"af-element buttonContainer\">\n<input name=\"submit\" class=\"submit\" type=\"submit\" value=\"Send Me My E-Book!\" tabindex=\"502\" \/>\n<div class=\"af-clear\"><\/div>\n<\/div>\n<\/div>\n<div id=\"af-footer-965845901\" class=\"af-footer\"><div class=\"bodyText\"><p style=\"text-align: center;\"><span style=\"color: #fff1e1; font-family: arial,helvetica,sans-serif;\">Please Enter Your E-mail and Click \"Send!\" Button<\/span><\/p><\/div><\/div>\n<\/div>\n<\/form>\n<script type=\"text\/javascript\">\n\/\/ Special handling for facebook iOS since it cannot open new windows\n(function() {\n    if (navigator.userAgent.indexOf('FBIOS') !== -1 || navigator.userAgent.indexOf('Twitter for iPhone') !== -1) {\n        document.getElementById('af-form-965845901').parentElement.removeAttribute('target');\n    }\n})();\n<\/script>","styles":"#af-form-965845901 .af-body .af-textWrap{width:98%;display:block;float:none;}\n#af-form-965845901 .af-body a{color:#F04F23;text-decoration:underline;font-style:normal;font-weight:normal;}\n#af-form-965845901 .af-body input.text, #af-form-965845901 .af-body textarea{background-color:#FFFFFF;border-color:#D9D9D9;border-width:1px;border-style:solid;color:#333333;text-decoration:none;font-style:normal;font-weight:bold;font-size:16px;font-family:Arial, sans-serif;}\n#af-form-965845901 .af-body input.text:focus, #af-form-965845901 .af-body textarea:focus{background-color:#FFFFFF;border-color:#D9D9D9;border-width:1px;border-style:solid;}\n#af-form-965845901 .af-body label.previewLabel{display:block;float:none;text-align:left;width:auto;color:#333333;text-decoration:none;font-style:normal;font-weight:bold;font-size:16px;font-family:Helvetica, sans-serif;}\n#af-form-965845901 .af-body{padding-bottom:0px;padding-top:15px;background-repeat:no-repeat;background-position:inherit;background-image:none;color:#333333;font-size:10px;font-family:Helvetica, sans-serif;}\n#af-form-965845901 .af-footer{padding-bottom:0px;padding-top:0px;padding-right:15px;padding-left:15px;background-color:#CF4C35;background-repeat:no-repeat;background-position:top left;background-image:none;border-width:1px;border-bottom-style:none;border-left-style:none;border-right-style:none;border-top-style:none;color:#333333;font-size:14px;font-family:Helvetica, sans-serif;}\n#af-form-965845901 .af-header{padding-bottom:9px;padding-top:9px;padding-right:10px;padding-left:10px;background-color:#CF4C35;background-repeat:repeat-x;background-position:inherit;background-image:none;border-color:#FFFFFF;border-width:1px;border-bottom-style:none;border-left-style:none;border-right-style:none;border-top-style:none;color:#FFFFFF;font-size:14px;font-family:Helvetica, sans-serif;}\n#af-form-965845901 .af-quirksMode .bodyText{padding-top:2px;padding-bottom:2px;}\n#af-form-965845901 .af-quirksMode{padding-right:75px;padding-left:75px;}\n#af-form-965845901 .af-standards .af-element{padding-right:75px;padding-left:75px;}\n#af-form-965845901 .bodyText p{margin:1em 0;}\n#af-form-965845901 .buttonContainer input.submit{background-image:none;background-color:#E62727;color:#FFFFFF;text-decoration:none;font-style:normal;font-weight:normal;font-size:18px;font-family:Helvetica, sans-serif;}\n#af-form-965845901 .buttonContainer input.submit{width:auto;}\n#af-form-965845901 .buttonContainer{text-align:center;}\n#af-form-965845901 body,#af-form-965845901 dl,#af-form-965845901 dt,#af-form-965845901 dd,#af-form-965845901 h1,#af-form-965845901 h2,#af-form-965845901 h3,#af-form-965845901 h4,#af-form-965845901 h5,#af-form-965845901 h6,#af-form-965845901 pre,#af-form-965845901 code,#af-form-965845901 fieldset,#af-form-965845901 legend,#af-form-965845901 blockquote,#af-form-965845901 th,#af-form-965845901 td{float:none;color:inherit;position:static;margin:0;padding:0;}\n#af-form-965845901 button,#af-form-965845901 input,#af-form-965845901 submit,#af-form-965845901 textarea,#af-form-965845901 select,#af-form-965845901 label,#af-form-965845901 optgroup,#af-form-965845901 option{float:none;position:static;margin:0;}\n#af-form-965845901 div{margin:0;}\n#af-form-965845901 fieldset{border:0;}\n#af-form-965845901 form,#af-form-965845901 textarea,.af-form-wrapper,.af-form-close-button,#af-form-965845901 img{float:none;color:inherit;position:static;background-color:none;border:none;margin:0;padding:0;}\n#af-form-965845901 input,#af-form-965845901 button,#af-form-965845901 textarea,#af-form-965845901 select{font-size:100%;}\n#af-form-965845901 p{color:inherit;}\n#af-form-965845901 select,#af-form-965845901 label,#af-form-965845901 optgroup,#af-form-965845901 option{padding:0;}\n#af-form-965845901 table{border-collapse:collapse;border-spacing:0;}\n#af-form-965845901 ul,#af-form-965845901 ol{list-style-image:none;list-style-position:outside;list-style-type:disc;padding-left:40px;}\n#af-form-965845901,#af-form-965845901 .quirksMode{width:100%;max-width:418px;}\n#af-form-965845901.af-quirksMode{overflow-x:hidden;}\n#af-form-965845901{background-color:#FFFFFF;border-color:#473747;border-width:5px;border-style:none;}\n#af-form-965845901{display:block;}\n.af-body .af-textWrap{text-align:left;}\n.af-body input.image{border:none!important;}\n.af-body input.submit,.af-body input.image,.af-form .af-element input.button{float:none!important;}\n.af-body input.text{width:100%;float:none;padding:2px!important;}\n.af-body.af-standards input.submit{padding:4px 12px;}\n.af-clear{clear:both;}\n.af-element label{text-align:left;display:block;float:left;}\n.af-element{padding-bottom:5px;padding-top:5px;}\n.af-form-wrapper{text-indent:0;}\n.af-form{text-align:left;margin:auto;}\n.af-header,.af-footer{margin-bottom:0;margin-top:0;padding:10px;}\n.af-quirksMode .af-element{padding-left:0!important;padding-right:0!important;}\n.dropShadowBottom965845901{background:url(https:\/\/forms.aweber.com\/images\/wfg\/drop-bottom.png) repeat-x;width:416px;height:10px;float:left;margin-bottom:0;line-height:0;font-size:0;padding:0;}\n.dropShadowL965845901{background:url(https:\/\/forms.aweber.com\/images\/wfg\/drop-left.png) repeat-y;line-height:0;font-size:0;width:10px;height:100%;float:left;margin-bottom:0;}\n.dropShadowLL965845901{background:url(https:\/\/forms.aweber.com\/images\/wfg\/drop-bottomLeft.png) no-repeat;width:10px;height:10px;float:left;margin-bottom:0;line-height:0;font-size:0;padding:0;}\n.dropShadowLR965845901{background:url(https:\/\/forms.aweber.com\/images\/wfg\/drop-bottomRight.png) no-repeat;width:10px;height:10px;float:left;margin-bottom:0;line-height:0;font-size:0;padding:0;}\n.dropShadowR965845901{background:url(https:\/\/forms.aweber.com\/images\/wfg\/drop-right.png) repeat-y;width:10px;height:100%;float:right;margin-bottom:0;}\n.dropShadowTop965845901{background:url(https:\/\/forms.aweber.com\/images\/wfg\/drop-top.png) repeat-x;width:416px;height:10px!important;line-height:0;font-size:0;float:left;margin-bottom:0;padding:0;}\n.dropShadowUL965845901{background:url(https:\/\/forms.aweber.com\/images\/wfg\/drop-topLeft.png) no-repeat;width:10px;height:10px!important;float:left;margin-bottom:0;line-height:0;font-size:0;padding:0;}\n.dropShadowUR965845901{background:url(https:\/\/forms.aweber.com\/images\/wfg\/drop-topRight.png) no-repeat;width:10px;line-height:0;font-size:0;height:10px!important;float:left;margin-bottom:0;padding:0;}\n.lbl-right .af-element label{text-align:right;}\nbody {\n}","height":"273","width":"418","plPath":"forms.aweber.com","delay":"0","popupURL":"https:\/\/forms.aweber.com\/form\/01\/965845901.html","formType":"lightbox","animation":"default","redirectId":"redirect_09f6c4b4e7aea98a82bf7d3a78e02c93","returnToPage":1} );
    };
    if (typeof awf_Form_.AWFormGenerator == 'undefined') {
        var unique_track = new Image();
        unique_track.src = "https://forms.aweber.com/form/displays.htm?id=nGysHCysnAyM";
        if (typeof awf_Form_.FormQueue == 'undefined') { awf_Form_.FormQueue = []; }
        awf_Form_.FormQueue.push(loadForm);
    } else {
        var unique_track = new Image();
        unique_track.src = "https://forms.aweber.com/form/displays.htm?id=nGysHCysnAyM";
        loadForm();
    }
    awf_Form_.setExpirationCookie();
}

awf_Form_.setExpirationCookie = function() {
    awf_Form_.expDate = new Date();
    awf_Form_.expDate.setTime(awf_Form_.expDate.getTime() + -86400000);
    awf_Form_.setCookie('awpopup_965845901', '1', awf_Form_.expDate, '/', document.domain, 0);
}
awf_Form_.setExpirationCookie()
if ((awf_Form_.isPreview || !awf_Form_.getCookie('awpopup_965845901')) && typeof hide_awf_Form=='undefined') {
    awf_Form_.showForm();
}