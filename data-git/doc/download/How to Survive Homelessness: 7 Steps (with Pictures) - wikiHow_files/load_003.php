var mediaWikiLoadStart=(new Date()).getTime();function isCompatible(ua){if(ua===undefined){ua=navigator.userAgent;}return!((ua.indexOf('MSIE')!==-1&&parseFloat(ua.split('MSIE')[1])<6)||(ua.indexOf('Firefox/')!==-1&&parseFloat(ua.split('Firefox/')[1])<3)||ua.match(/BlackBerry[^\/]*\/[1-5]\./)||ua.match(/webOS\/1\.[0-4]/)||ua.match(/PlayStation/i)||ua.match(/SymbianOS|Series60/)||ua.match(/NetFront/)||ua.match(/Opera Mini/)||ua.match(/S40OviBrowser/)||(ua.match(/Glass/)&&ua.match(/Android/)));}var startUp=function(){mw.config=new mw.Map(true);mw.loader.addSource({"local":{"loadScript":"/load.php","apiScript":"/api.php"}});mw.loader.register([["site","1479298232",[],"site"],["noscript","1479325591",[],"noscript"],["startup","1479419351",[],"startup"],["filepage","1479325591"],["user.groups","1479325591",[],"user"],["user","1479325591",[],"user"],["user.cssprefs","1479234342",["mediawiki.user"],"private"],["user.options","1479234342",[],"private"],["user.tokens","1479234342",[],"private"],
["mediawiki.language.data","1479234342",["mediawiki.language.init"]],["skins.common.elements","1479238642"],["skins.common.content","1479238642"],["skins.common.interface","1479238642"],["skins.cologneblue","1479238642"],["skins.modern","1479238642"],["skins.vector.styles","1479238642"],["skins.monobook.styles","1479238642"],["skins.vector.js","1479238642",["jquery.delayedBind"]],["skins.vector.collapsibleNav","1479238642",["jquery.client","jquery.cookie","jquery.tabIndex"]],["jquery","1479234342"],["jquery.appear","1479325591"],["jquery.arrowSteps","1479325591"],["jquery.async","1479325591"],["jquery.autoEllipsis","1479234342",["jquery.highlightText"]],["jquery.badge","1479325591",["mediawiki.language"]],["jquery.byteLength","1479358537"],["jquery.byteLimit","1479387476",["jquery.byteLength"]],["jquery.checkboxShiftClick","1479234342"],["jquery.chosen","1479325591"],["jquery.client","1479267475"],["jquery.color","1479325591",["jquery.colorUtil"]],["jquery.colorUtil","1479325591"],[
"jquery.cookie","1479267475"],["jquery.delayedBind","1479325591"],["jquery.expandableField","1479325591",["jquery.delayedBind"]],["jquery.farbtastic","1479325591",["jquery.colorUtil"]],["jquery.footHovzer","1479325591"],["jquery.form","1479325591"],["jquery.fullscreen","1479325591"],["jquery.getAttrs","1479325591"],["jquery.hidpi","1479325591"],["jquery.highlightText","1479234342",["jquery.mwExtension"]],["jquery.hoverIntent","1479325591"],["jquery.json","1479352638"],["jquery.localize","1479325591"],["jquery.makeCollapsible","1479234342"],["jquery.mockjax","1479325591"],["jquery.mw-jump","1479234342"],["jquery.mwExtension","1479267475"],["jquery.placeholder","1479234342"],["jquery.qunit","1479325591"],["jquery.qunit.completenessTest","1479325591",["jquery.qunit"]],["jquery.spinner","1479234342"],["jquery.jStorage","1479325591",["jquery.json"]],["jquery.suggestions","1479234342",["jquery.autoEllipsis"]],["jquery.tabIndex","1479325591"],["jquery.tablesorter","1479325591",[
"jquery.mwExtension","mediawiki.language.months"]],["jquery.textSelection","1479387476",["jquery.client"]],["jquery.throttle-debounce","1479402623"],["jquery.validate","1479325591"],["jquery.xmldom","1479325591"],["jquery.tipsy","1479325591"],["jquery.ui.core","1479391638",["jquery"],"jquery.ui"],["jquery.ui.widget","1479391638",[],"jquery.ui"],["jquery.ui.mouse","1479391638",["jquery.ui.widget"],"jquery.ui"],["jquery.ui.position","1479391638",[],"jquery.ui"],["jquery.ui.draggable","1479391638",["jquery.ui.core","jquery.ui.mouse","jquery.ui.widget"],"jquery.ui"],["jquery.ui.droppable","1479325591",["jquery.ui.core","jquery.ui.draggable","jquery.ui.mouse","jquery.ui.widget"],"jquery.ui"],["jquery.ui.resizable","1479391638",["jquery.ui.core","jquery.ui.mouse","jquery.ui.widget"],"jquery.ui"],["jquery.ui.selectable","1479325591",["jquery.ui.core","jquery.ui.mouse","jquery.ui.widget"],"jquery.ui"],["jquery.ui.sortable","1479325591",["jquery.ui.core","jquery.ui.mouse","jquery.ui.widget"],
"jquery.ui"],["jquery.ui.accordion","1479325591",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.autocomplete","1479325591",["jquery.ui.core","jquery.ui.position","jquery.ui.widget"],"jquery.ui"],["jquery.ui.button","1479391638",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.datepicker","1479325591",["jquery.ui.core"],"jquery.ui"],["jquery.ui.dialog","1479391638",["jquery.ui.button","jquery.ui.core","jquery.ui.draggable","jquery.ui.mouse","jquery.ui.position","jquery.ui.resizable","jquery.ui.widget"],"jquery.ui"],["jquery.ui.progressbar","1479325591",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.slider","1479325591",["jquery.ui.core","jquery.ui.mouse","jquery.ui.widget"],"jquery.ui"],["jquery.ui.tabs","1479325591",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.effects.core","1479325591",["jquery"],"jquery.ui"],["jquery.effects.blind","1479325591",["jquery.effects.core"],"jquery.ui"],["jquery.effects.bounce","1479325591",[
"jquery.effects.core"],"jquery.ui"],["jquery.effects.clip","1479325591",["jquery.effects.core"],"jquery.ui"],["jquery.effects.drop","1479325591",["jquery.effects.core"],"jquery.ui"],["jquery.effects.explode","1479325591",["jquery.effects.core"],"jquery.ui"],["jquery.effects.fade","1479325591",["jquery.effects.core"],"jquery.ui"],["jquery.effects.fold","1479325591",["jquery.effects.core"],"jquery.ui"],["jquery.effects.highlight","1479325591",["jquery.effects.core"],"jquery.ui"],["jquery.effects.pulsate","1479325591",["jquery.effects.core"],"jquery.ui"],["jquery.effects.scale","1479325591",["jquery.effects.core"],"jquery.ui"],["jquery.effects.shake","1479325591",["jquery.effects.core"],"jquery.ui"],["jquery.effects.slide","1479325591",["jquery.effects.core"],"jquery.ui"],["jquery.effects.transfer","1479325591",["jquery.effects.core"],"jquery.ui"],["moment","1479325591"],["mediawiki","1479234342"],["mediawiki.api","1479267475",["mediawiki.util"]],["mediawiki.api.category","1479325591",[
"mediawiki.Title","mediawiki.api"]],["mediawiki.api.edit","1479325591",["mediawiki.Title","mediawiki.api"]],["mediawiki.api.login","1479325591",["mediawiki.api"]],["mediawiki.api.parse","1479325591",["mediawiki.api"]],["mediawiki.api.watch","1479234342",["mediawiki.api","user.tokens"]],["mediawiki.debug","1479325591",["jquery.footHovzer"]],["mediawiki.debug.init","1479325591",["mediawiki.debug"]],["mediawiki.feedback","1479325591",["jquery.ui.dialog","mediawiki.Title","mediawiki.api.edit","mediawiki.jqueryMsg"]],["mediawiki.hidpi","1479325591",["jquery.hidpi"]],["mediawiki.hlist","1479325591",["jquery.client"]],["mediawiki.htmlform","1479386982"],["mediawiki.icon","1479234342"],["mediawiki.inspect","1479325591",["jquery.byteLength","jquery.json"]],["mediawiki.notification","1479325591",["mediawiki.page.startup"]],["mediawiki.notify","1479267475"],["mediawiki.searchSuggest","1479234342",["jquery.autoEllipsis","jquery.client","jquery.placeholder","jquery.suggestions","mediawiki.api"]],[
"mediawiki.Title","1479234342",["jquery.byteLength","mediawiki.util"]],["mediawiki.toc","1479267475",["jquery.cookie"]],["mediawiki.Uri","1479396499"],["mediawiki.user","1479267475",["jquery.cookie","mediawiki.api","user.options","user.tokens"]],["mediawiki.util","1479267475",["jquery.client","jquery.mwExtension","mediawiki.notify","mediawiki.toc"]],["mediawiki.cookie","1479381171",["jquery.cookie"]],["mediawiki.action.edit","1479387476",["jquery.byteLimit","jquery.textSelection","mediawiki.action.edit.styles"]],["mediawiki.action.edit.styles","1479387476"],["mediawiki.action.edit.collapsibleFooter","1479234342",["jquery.cookie","jquery.makeCollapsible","mediawiki.icon"]],["mediawiki.action.edit.preview","1479325591",["jquery.form","jquery.spinner","mediawiki.action.history.diff"]],["mediawiki.action.history","1479325591",[],"mediawiki.action.history"],["mediawiki.action.history.diff","1479325591",[],"mediawiki.action.history"],["mediawiki.action.view.dblClickEdit","1479325591",[
"mediawiki.page.startup","mediawiki.util"]],["mediawiki.action.view.metadata","1479325591"],["mediawiki.action.view.postEdit","1479381172",["mediawiki.cookie","mediawiki.jqueryMsg"]],["mediawiki.action.view.redirectToFragment","1479325591",["jquery.client"]],["mediawiki.action.view.rightClickEdit","1479325591"],["mediawiki.action.edit.editWarning","1479234342",["mediawiki.jqueryMsg"]],["mediawiki.action.watch.ajax","1479234342",["mediawiki.page.watch.ajax"]],["mediawiki.language","1479234342",["mediawiki.cldr","mediawiki.language.data"]],["mediawiki.cldr","1479234342",["mediawiki.libs.pluralruleparser"]],["mediawiki.libs.pluralruleparser","1479234342"],["mediawiki.language.init","1479234342"],["mediawiki.jqueryMsg","1479234342",["mediawiki.language","mediawiki.util"]],["mediawiki.language.months","1479325591",["mediawiki.language"]],["mediawiki.libs.jpegmeta","1479325591"],["mediawiki.page.gallery","1479325591"],["mediawiki.page.ready","1479234342",["jquery.checkboxShiftClick",
"jquery.makeCollapsible","jquery.mw-jump","jquery.placeholder","mediawiki.util"]],["mediawiki.page.startup","1479267475",["jquery.client","mediawiki.util"]],["mediawiki.page.patrol.ajax","1479410320",["jquery.spinner","mediawiki.Title","mediawiki.api","mediawiki.notify","mediawiki.page.startup","mediawiki.util","user.tokens"]],["mediawiki.page.watch.ajax","1479234342",["jquery.mwExtension","mediawiki.api.watch","mediawiki.notify","mediawiki.page.startup","mediawiki.util"]],["mediawiki.page.image.pagination","1479325591",["jquery.spinner"]],["mediawiki.special","1479234342"],["mediawiki.special.block","1479325591",["mediawiki.util"]],["mediawiki.special.changeemail","1479325591",["mediawiki.util"]],["mediawiki.special.changeslist","1479325591"],["mediawiki.special.changeslist.legend","1479325591"],["mediawiki.special.changeslist.legend.js","1479325591",["jquery.cookie","jquery.makeCollapsible"]],["mediawiki.special.changeslist.enhanced","1479325591"],["mediawiki.special.movePage",
"1479325591",["jquery.byteLimit"]],["mediawiki.special.pagesWithProp","1479325591"],["mediawiki.special.preferences","1479325591",["mediawiki.language"]],["mediawiki.special.recentchanges","1479325591",["mediawiki.special"]],["mediawiki.special.search","1479325591"],["mediawiki.special.undelete","1479325591"],["mediawiki.special.upload","1479325591",["mediawiki.libs.jpegmeta","mediawiki.util"]],["mediawiki.special.userlogin.common.styles","1479325591"],["mediawiki.special.userlogin.signup.styles","1479325591"],["mediawiki.special.userlogin.login.styles","1479325591"],["mediawiki.special.userlogin.common.js","1479365961"],["mediawiki.special.userlogin.signup.js","1479365961",["mediawiki.jqueryMsg"]],["mediawiki.special.javaScriptTest","1479325591",["jquery.qunit"]],["mediawiki.special.version","1479325591"],["mediawiki.legacy.ajax","1479380687",["mediawiki.legacy.wikibits","mediawiki.util"]],["mediawiki.legacy.commonPrint","1479234342"],["mediawiki.legacy.config","1479238642",[
"mediawiki.legacy.wikibits"]],["mediawiki.legacy.protect","1479238642",["jquery.byteLimit"]],["mediawiki.legacy.shared","1479234342"],["mediawiki.legacy.oldshared","1479238642"],["mediawiki.legacy.upload","1479238642",["jquery.spinner","mediawiki.Title","mediawiki.api","mediawiki.util"]],["mediawiki.legacy.wikibits","1479380687",["mediawiki.util"]],["mediawiki.ui","1479325591"],["mediawiki.ui.button","1479234342"],["oojs","1479325591"],["oojs-ui","1479325591",["oojs"]],["ext.wikihow.common_top","1479380766",["mediawiki.user"]],["ext.wikihow.common_bottom","1479234342",["ext.wikihow.common_top","mediawiki.jqueryMsg","wikihow.common.mustache"]],["ext.wikihow.desktop_base","1479380687",["ext.wikihow.common_top"]],["ext.wikihow.flowplayer","1479399099"],["ext.wikihow.whvid","1479399099",["ext.wikihow.desktop_base","ext.wikihow.flowplayer"]],["ext.wikihow.rcwidget","1479315972",["ext.wikihow.desktop_base"]],["ext.wikihow.slider","1479397701",["ext.wikihow.desktop_base"]],[
"ext.wikihow.toptentips","1479312836",["ext.wikihow.desktop_base"]],["ext.wikihow.homepage","1479238642",["ext.wikihow.desktop_base"]],["ext.wikihow.image_feedback","1479302332",["ext.wikihow.desktop_base"]],["ext.wikihow.thumbsup","1479238642",["ext.wikihow.desktop_base"]],["ext.wikihow.printable","1479397944"],["ext.wikihow.printable_all","1479348834"],["ext.wikihow.magnificpopup","1479234342"],["ext.wikihow.wikihowDesktopAds","1479331996",["ext.wikihow.desktop_base"]],["ext.wikihow.rcTestAdmin","1479275230",["ext.wikihow.desktop_base","jquery.ui.dialog"]],["ext.wikihow.kbguardian.scripts","1479238642"],["ext.wikihow.mobile.kbguardian.scripts","1479238642",["ext.wikihow.MobileToolCommon","mediawiki.page.ready","mobile.wikihow"]],["ext.wikihow.kbguardian.styles","1479238642"],["ext.wikihow.samples","1479234342"],["ext.wikihow.articlecreator","1479234342",["ext.wikihow.desktop_base","jquery.ui.dialog","jquery.ui.sortable"]],["ext.eventLogging","1479399848",["jquery.json",
"mediawiki.util"]],["ext.eventLogging.jsonSchema","1479238642"],["schema.GuidedTour","1479234342",["ext.eventLogging"]],["mediawiki.libs.guiders","1479399101"],["ext.guidedTour.styles","1479399101",["mediawiki.libs.guiders","mediawiki.ui.button"]],["ext.guidedTour.siteStyles","1479234342",["ext.guidedTour.styles"]],["ext.guidedTour.lib.internal","1479399101"],["ext.guidedTour.lib","1479399101",["ext.guidedTour.lib.internal","ext.guidedTour.siteStyles","jquery.cookie","jquery.json","mediawiki.jqueryMsg","mediawiki.libs.guiders","mediawiki.util","schema.GuidedTour"]],["ext.guidedTour","1479399101",["ext.guidedTour.lib"]],["ext.guidedTour.tour.dashboard","1479376120",["ext.guidedTour"]],["ext.guidedTour.tour.fe","1479238643",["ext.guidedTour"]],["ext.guidedTour.tour.rc","1479234342",["ext.guidedTour"]],["ext.guidedTour.tour.talk","1479238643",["ext.guidedTour"]],["ext.guidedTour.tour.firstedit","1479238643",["ext.guidedTour"]],["ext.guidedTour.tour.firsteditve","1479238643",[
"ext.guidedTour"]],["ext.guidedTour.tour.test","1479238643",["ext.guidedTour"]],["mobile.rclite","1479238643",["ext.wikihow.MobileToolCommon","mobile.wikihow"]],["ext.wikihow.adminunlinksocial.scripts","1479238643"],["ext.wikihow.adminunlinksocial.styles","1479238643"],["wikihow.answerquestions_css","1479234342"],["wikihow.answerquestions_js","1479236058",["wikihow.common.string_validator"]],["wikihow.adminanswerquestions","1479234342"],["ext.wikihow.editpage_quicktips","1479238314"],["ext.wikihow.ucipatrol","1479238643",["mediawiki.user"]],["ext.wikihow.mobile.ucipatrol","1479238643",["ext.wikihow.MobileToolCommon","mediawiki.user","mobile.wikihow"]],["ext.wikihow.socialproof.special","1479238643",["jquery.spinner"]],["ext.wikihow.socialproof","1479283481",["ext.wikihow.common_top","wikihow.common.jquery.dateformat"]],["mobile.wikihow.socialproof","1479238643",["ext.wikihow.socialproof"]],["ext.wikihow.ratetool","1479238643"],["ext.wikihow.adminratetool","1479238643"],[
"ext.wikihow.spellchecker","1479234342",["mediawiki.page.ready"]],["ext.wikihow.mobile.spellchecker","1479238643",["ext.wikihow.MobileToolCommon","mobile.wikihow"]],["ext.wikihow.CategoryGuardian","1479238643",["mediawiki.page.ready"]],["ext.wikihow.CategoryGuardian.styles","1479238643"],["ext.wikihow.mobile.CategoryGuardian","1479238643",["mobile.wikihow"]],["ext.wikihow.usercompletedimages","1479415805",["mediawiki.user"]],["mobile.wikihow.uci","1479234342",["mediawiki.user","mobile.wikihow"]],["ext.wikihow.AdminPlants","1479238643",["mediawiki.page.ready"]],["ext.wikihow.AdminPlants.styles","1479238643"],["mobile.tipsguardian.scripts","1479238643",["ext.wikihow.MobileToolCommon","mobile.wikihow"]],["ext.wikihow.mobile.unitguardian","1479238643",["ext.wikihow.MobileToolCommon","mobile.wikihow"]],["ext.wikihow.stepeditor","1479234342",["jquery.ui.dialog"]],["ext.wikihow.articlereviewers","1479238643"],["ext.wikihow.articlereviewers_script","1479238643"],[
"ext.wikihow.mobilearticlereviewers","1479238643"],["ext.wikihow.adminarticlereviewers","1479238643"],["ext.wikihow.first_edit_modal","1479271964"],["ext.wikihow.helpfulness_followup_modal","1479238643"],["ext.wikihow.expertise_modal","1479238552",["jquery.ui.autocomplete"]],["ext.wikihow.expertise_modal_2","1479238303"],["ext.wikihow.printview_modal","1479238643"],["ext.wikihow.toolinfo","1479238643",["ext.wikihow.UsageLogs"]],["ext.wikihow.wikivisuallibrary.special.top","1479238643"],["ext.wikihow.wikivisuallibrary.special.bottom","1479238643",["jquery.ui.datepicker","wikihow.common.mustache"]],["ext.wikihow.search_ad","1479238643"],["ext.wikihow.qa_patrol","1479238643"],["ext.wikihow.qa_box","1479306555",["wikihow.common.pub_sub"]],["wikihow.answer_response","1479244621"],["wikihow.scripts.answer_response","1479244621",["ext.wikihow.common_bottom"]],["ext.wikihow.lightbox","1479234342",["jquery"]],["ext.wikihow.android_helper","1479238643",["mediawiki.page.ready"]],[
"ext.wikihow.android_helper_ajax","1479238643"],["ext.wikihow.UsageLogs","1479305682",["mediawiki.page.ready","wikihow.common.bowser","wikihow.common.underscore"]],["mobile.templates","1479238643"],["mobile.bridge","1479234342"],["mobile.loggingSchemas","1479234342",["mobile.startup"]],["mobile.file.scripts","1479234342",["mobile.startup"]],["mobile.styles.mainpage","1479234342",[],"other"],["mobile.pagelist.styles","1479234342"],["mobile.styles","1479234342"],["tablet.styles","1479234342",["mobile.startup"]],["mobile.toc","1479234342",["mobile.startup","mobile.templates"]],["tablet.scripts","1479234342",["mobile.toc"]],["skins.minerva.buttons.styles","1479234342"],["skins.minerva.chrome.styles","1479234342"],["skins.minerva.content.styles","1479234342"],["skins.minerva.drawers.styles","1479234342"],["mobile.styles.beta","1479234342"],["mobile.head","1479234342"],["mobile.head.beta","1479234342",["mediawiki.jqueryMsg","mediawiki.language","mobile.head"]],["mobile.startup","1479234342",
["jquery.cookie","mobile.head","mobile.templates","mobile.user"]],["mobile.user","1479234342",["mediawiki.user","mobile.head"]],["mobile.editor","1479234342",["mobile.overlays","mobile.stable.common","mobile.wikihow.whCtaDrawer"]],["mobile.editor.common","1479234342",["jquery.cookie","mobile.stable","mobile.templates"]],["mobile.editor.ve","1479234342",["ext.visualEditor.mobileViewTarget","mobile.beta","mobile.editor.common","mobile.stable.common"]],["mobile.editor.overlay","1479234342",["mobile.editor.common","mobile.loggingSchemas"]],["mobile.uploads","1479234342",["mobile.stable","mobile.templates"]],["mobile.beta.common","1479234342",["mobile.loggingSchemas","mobile.stable.common","mobile.templates"]],["mobile.keepgoing","1479234342",["mobile.beta","mobile.overlays","mobile.templates"]],["mobile.geonotahack","1479234342",["mobile.loggingSchemas","mobile.overlays","mobile.stable.common","mobile.startup"]],["mobile.beta","1479234342",["mobile.beta.common","mobile.overlays",
"mobile.stable"]],["mobile.search","1479234342",["mobile.overlays"]],["mobile.search.stable","1479234342",["mobile.search"]],["mobile.talk","1479234342",["mobile.beta","mobile.templates"]],["mobile.ajaxpages","1479234342",["mobile.startup"]],["mobile.alpha","1479234342",["mobile.ajaxpages","mobile.beta","mobile.keepgoing"]],["mobile.toast.styles","1479234342"],["mobile.stable.styles","1479234342"],["mobile.overlays","1479234342",["mobile.startup","mobile.templates"]],["mobile.stable.common","1479234342",["mediawiki.jqueryMsg","mediawiki.util","mobile.overlays","mobile.startup","mobile.templates","mobile.toast.styles"]],["mobile.lastEdited.stable","1479234342",["mobile.stable"]],["mobile.references","1479234342",["mobile.stable.common","mobile.startup","mobile.templates"]],["mobile.toggling","1479234342",["mobile.startup"]],["mobile.toggling.beta","1479234342",["mobile.toggling"]],["mobile.contentOverlays","1479234342",["mobile.overlays"]],["mobile.newusers","1479234342",[
"mobile.contentOverlays","mobile.editor","mobile.templates"]],["mobile.stable","1479234342",["mediawiki.language","mediawiki.util","mobile.loggingSchemas","mobile.references","mobile.stable.common","mobile.stable.styles","mobile.startup","mobile.templates","mobile.user"]],["mobile.languages.common","1479234342",["mobile.overlays"]],["mobile.languages","1479234342",["mobile.languages.common"]],["mobile.languages.beta","1479234342",["mobile.languages.common"]],["mobile.issues","1479234342",["mobile.overlays"]],["mobile.desktop","1479238643",["jquery.cookie"]],["mobile.mobileoptions.scripts","1479234342",["mobile.startup","mobile.templates"]],["mobile.nearby.styles","1479234342"],["mobile.nearby.beta","1479234342",["mobile.beta.common","mobile.nearby","mobile.stable.common"]],["mobile.nearby","1479234342",["jquery.json","mediawiki.language","mobile.loggingSchemas","mobile.nearby.styles","mobile.stable.common","mobile.templates"]],["mobile.nearby.scripts","1479234342",["mobile.nearby"]],[
"mobile.notifications","1479234342",["mobile.overlays"]],["mobile.notifications.overlay","1479234342",["ext.echo.base","mobile.stable"]],["mobile.uploads.scripts","1479234342",["mobile.stable.common","mobile.stable.styles","mobile.templates"]],["mobile.mobilediff.scripts","1479234342",["mobile.loggingSchemas","mobile.stable.common"]],["mobile.wikihow","1479234342",["ext.wikihow.common_top"]],["zzz.mobile.wikihow.styles_late_load","1479234342"],["mobile.wikihow.wikivideo.gif","1479234342"],["mobile.wikihow.wikivideo","1479234342"],["mobile.wikihow.user","1479234342"],["mobile.wikihow.userscript","1479234342"],["zzz.mobile.wikihow.homepage","1479234342"],["zzz.mobile.wikihow.notifications","1479234342"],["mobile.wikihow.loggedout","1479234342",["mobile.overlays"]],["mobile.wikihow.loggedout.overlay","1479234342",["mobile.stable"]],["mobile.wikihow.notifications.overlay","1479234342",["mobile.notifications.overlay"]],["zzz.mobile.wikihow.sample","1479234342"],["mobile.wikihow.login",
"1479234342",["mobile.stable"]],["mobile.wikihow.whCtaDrawer","1479234342",["mobile.stable"]],["zzz.mobile.wikihow.passwordreset","1479234342"],["mobile.wikihow.stable.styles","1479234342",["mobile.stable.styles"]],["ext.wikihow.nab","1479238643"],["ext.wikihow.nab.styles","1479238643"],["ext.wikihow.wikivid","1479234342"],["wikihow.common.string_validator","1479374565"],["wikihow.common.pub_sub","1479374565",["jquery"]],["wikihow.common.thumbs_up_down","1479374565",["wikihow.common.pub_sub"]],["mobile.wikihow.common.thumbs_up_down","1479238643",["wikihow.common.pub_sub"]],["mobile.wikihow.qa_widget","1479419351",["jquery.throttle-debounce","mobile.wikihow","mobile.wikihow.common.thumbs_up_down","wikihow.common.mustache","wikihow.common.pub_sub","wikihow.common.string_validator"]],["ext.wikihow.qa_widget","1479419351",["ext.wikihow.common_bottom","jquery.throttle-debounce","wikihow.common.mustache","wikihow.common.pub_sub","wikihow.common.string_validator",
"wikihow.common.thumbs_up_down"]],["mobile.wikihow.qa_admin","1479238643",["wikihow.common.jquery.download","wikihow.common.mustache"]],["ext.wikihow.ImportVideo","1479238643",["ext.wikihow.common_top","jquery.ui.dialog"]],["ext.scribunto","1479238643",["jquery.ui.dialog"]],["ext.scribunto.edit","1479238643",["ext.scribunto","jquery.spinner","mediawiki.api"]],["ext.checkUser","1479238643",["mediawiki.util"]],["ext.cite","1479238643",["jquery.tooltip"]],["jquery.tooltip","1479238643"],["ext.rtlcite","1479234342"],["ext.Drafts","1479234342",["mediawiki.jqueryMsg","mediawiki.legacy.wikibits"]],["ext.wikihow.PatrolCount","1479238643"],["ext.wikihow.lsearch.desktop.styles","1479238318"],["ext.wikihow.lsearch.mobile.styles","1479238643"],["ext.wikihow.FBLogin","1479238643"],["ext.wikihow.FBLogin.styles","1479238643"],["ext.wikihow.GPlusLogin","1479238486"],["ext.wikihow.GPlusLogin.styles","1479238485"],["ext.wikihow.SuggestedTopics","1479238629",["ext.wikihow.common_top","jquery.ui.dialog"]]
,["ext.wikihow.ratingreason","1479238643"],["ext.wikihow.ratingreason.styles","1479238643"],["ext.wikihow.ratingreason.mh_style","1479238623"],["ext.wikihow.ratingreason.mh_style.styles","1479238623"],["ext.wikihow.rating_sidebar","1479307130"],["ext.wikihow.rating_sidebar.styles","1479310042"],["ext.wikihow.ManageRelated","1479238643",["ext.wikihow.desktop_base"]],["ext.confirmEdit.fancyCaptcha.styles","1479238245"],["ext.confirmEdit.fancyCaptcha","1479238643",["mediawiki.api"]],["ext.confirmEdit.fancyCaptchaMobile","1479238643",["mobile.startup"]],["ext.wikihow.catsearchui","1479305682",["jquery.ui.autocomplete"]],["ext.wikihow.categorizer","1479238643",["ext.wikihow.desktop_base","jquery.ui.autocomplete"]],["ext.geshi.local","1479325591"],["mobile.wikihow.mobileslideshow","1479238643",["mediawiki.jqueryMsg"]],["ext.wikihow.greenhouse","1479366310",["jquery.ui.dialog"]],["ext.wikihow.greenhouse.styles","1479234342"],["ext.wikihow.userloginbox","1479412976"],[
"mobile.wikihow.mobile_category_page","1479238643",["ext.wikihow.common_top","mobile.wikihow.category_carousel"]],["mobile.wikihow.category_carousel","1479238643",["wikihow.common.mustache","wikihow.common.slick"]],["ext.MassMessage.special.js","1479238643",["jquery.byteLimit","jquery.delayedBind","jquery.ui.autocomplete","mediawiki.jqueryMsg"]],["ext.MassMessage.special","1479238643"],["ext.echo.base","1479405544"],["ext.echo.desktop","1479405544",["ext.echo.base","mediawiki.Uri","mediawiki.api","mediawiki.jqueryMsg","mediawiki.user"]],["ext.echo.overlay","1479405544",["ext.echo.desktop","mediawiki.language","mediawiki.util"]],["ext.echo.special","1479238185",["ext.echo.desktop","mediawiki.ui.button"]],["ext.echo.alert","1479238643"],["ext.echo.badge","1479292444"],["ext.abuseFilter","1479238582"],["ext.abuseFilter.edit","1479238643",["jquery.spinner","jquery.textSelection","mediawiki.api","mediawiki.util"]],["ext.abuseFilter.tools","1479238643",["jquery.spinner","mediawiki.api",
"mediawiki.notify","user.tokens"]],["ext.abuseFilter.examine","1479238643",["jquery.spinner","mediawiki.api"]],["ext.wikihow.PatrolThrottle","1479238643"],["wikihow.common.jquery.download","1479264203"],["wikihow.common.jquery.dateformat","1479381172"],["wikihow.common.underscore","1479305682"],["wikihow.common.aim","1479238643"],["wikihow.common.bowser","1479305682"],["wikihow.common.mustache","1479234342"],["wikihow.common.backbone","1479238643",["wikihow.common.mustache","wikihow.common.underscore"]],["wikihow.common.listjs","1479238643"],["wikihow.common.font-awesome","1479238643"],["wikihow.common.slick","1479238643"],["ext.wikihow.talkpages","1479338185",["wikihow.common.jquery.dateformat"]],["ext.wikihow.knowledgebox","1479234342",["mediawiki.page.ready"]],["ext.wikihow.adminsocialproof","1479238643",["jquery.spinner","mediawiki.page.startup"]],["ext.wikihow.adminexpertdoc","1479238643",["jquery.spinner","mediawiki.page.startup"]],["ext.wikihow.admininstantarticles","1479238643"
,["jquery.spinner","mediawiki.page.startup"]],["ext.wikihow.adminverifyreview","1479238643",["jquery.spinner","mediawiki.page.startup"]],["ext.wikihow.finner.styles","1479238643"],["ext.nuke","1479238643"],["ext.wikihow.ataglance","1479380687"],["ext.wikihow.ataglance.slider","1479244117",["ext.wikihow.ataglance"]],["ext.math.styles","1479375845"],["ext.math.desktop.styles","1479375845"],["ext.math.scripts","1479304158"],["ext.math.mathjax.enabler","1479238643"],["ext.math.mathjax.mathjax","1479238643"],["ext.math.mathjax.localization","1479234342",["ext.math.mathjax.mathjax"]],["ext.math.mathjax.jax.config","1479238643",["ext.math.mathjax.mathjax"]],["ext.math.mathjax.extensions.ui","1479238643",["ext.math.mathjax.mathjax"]],["ext.math.mathjax.extensions.TeX","1479238643",["ext.math.mathjax.mathjax"]],["ext.math.mathjax.extensions.mediawiki","1479238643",["ext.math.mathjax.mathjax"]],["ext.math.mathjax.extensions.mml2jax","1479238643",["ext.math.mathjax.mathjax"]],[
"ext.math.mathjax.extensions","1479234342",["ext.math.mathjax.extensions.TeX","ext.math.mathjax.extensions.mediawiki","ext.math.mathjax.extensions.mml2jax","ext.math.mathjax.extensions.ui"]],["ext.math.mathjax.jax.element.mml.optable","1479238643",["ext.math.mathjax.jax.element.mml"]],["ext.math.mathjax.jax.element.mml","1479238643",["ext.math.mathjax.mathjax"]],["ext.math.mathjax.jax.input.MathML","1479238643",["ext.math.mathjax.jax.config","ext.math.mathjax.jax.element.mml"]],["ext.math.mathjax.jax.input.TeX","1479238643",["ext.math.mathjax.jax.config","ext.math.mathjax.jax.element.mml"]],["ext.math.mathjax.jax.output.NativeMML","1479238643",["ext.math.mathjax.jax.config","ext.math.mathjax.jax.element.mml"]],["ext.math.mathjax.jax.output.HTML-CSS.autoload","1479238643",["ext.math.mathjax.jax.output.HTML-CSS"]],["ext.math.mathjax.jax.output.HTML-CSS","1479238643",["ext.math.mathjax.jax.config","ext.math.mathjax.jax.element.mml"]],[
"ext.math.mathjax.jax.output.HTML-CSS.fonts.TeX.fontdata","1479238643",["ext.math.mathjax.jax.output.HTML-CSS"]],["ext.math.mathjax.jax.output.SVG.autoload","1479238643",["ext.math.mathjax.jax.output.SVG"]],["ext.math.mathjax.jax.output.SVG","1479238643",["ext.math.mathjax.jax.config","ext.math.mathjax.jax.element.mml"]],["ext.math.mathjax.jax.output.SVG.fonts.TeX.fontdata","1479238643",["ext.math.mathjax.jax.output.SVG"]],["ext.math.mathjax.jax.output.HTML-CSS.fonts.TeX.MainJS","1479238643",["ext.math.mathjax.jax.output.HTML-CSS.fonts.TeX.fontdata"]],["ext.math.mathjax.jax.output.HTML-CSS.fonts.TeX.Main","1479238643",["ext.math.mathjax.jax.output.HTML-CSS.fonts.TeX.fontdata"]],["ext.math.mathjax.jax.output.HTML-CSS.fonts.TeX.AMS","1479238643",["ext.math.mathjax.jax.output.HTML-CSS.fonts.TeX.fontdata"]],["ext.math.mathjax.jax.output.HTML-CSS.fonts.TeX.Extra","1479238643",["ext.math.mathjax.jax.output.HTML-CSS.fonts.TeX.fontdata"]],["ext.math.mathjax.jax.output.SVG.fonts.TeX.MainJS",
"1479238643",["ext.math.mathjax.jax.output.SVG.fonts.TeX.fontdata"]],["ext.math.mathjax.jax.output.SVG.fonts.TeX.Main","1479238643",["ext.math.mathjax.jax.output.SVG.fonts.TeX.fontdata"]],["ext.math.mathjax.jax.output.SVG.fonts.TeX.AMS","1479238643",["ext.math.mathjax.jax.output.SVG.fonts.TeX.fontdata"]],["ext.math.mathjax.jax.output.SVG.fonts.TeX.Extra","1479238643",["ext.math.mathjax.jax.output.SVG.fonts.TeX.fontdata"]],["ext.math.visualEditor","1479238643",["ext.visualEditor.mwcore"]],["ext.wikihow.CategoryContacts","1479238643"],["ext.wikihow.CategoryContactMailer","1479238643",["jquery.ui.autocomplete"]],["ext.wikihow.CategoryContacts.styles","1479238643"],["ext.wikihow.VideoEmbedHelperTool","1479238643"],["ext.wikihow.socialauth","1479238643"],["ext.wikihow.sociallogin.buttons","1479383094"],["ext.wikihow.login_popin","1479238199",["ext.wikihow.desktop_base","jquery.ui.dialog"]],["ext.wikihow.userreviewtool","1479238643"],["ext.wikihow.userreviewimporter","1479238643"],[
"ext.wikihow.userreview","1479366951"],["ext.wikihow.UserReviewForm","1479234342",["ext.wikihow.common_bottom","ext.wikihow.common_top","ext.wikihow.magnificpopup"]],["ext.wikihow.methodhelpfulness.cta","1479238643"],["ext.wikihow.methodhelpfulness.cta.bottom_form","1479238643",["ext.wikihow.methodhelpfulness.cta"]],["ext.wikihow.methodhelpfulness.cta.bottom_form.desktop","1479238643",["ext.wikihow.methodhelpfulness.cta.bottom_form"]],["ext.wikihow.methodhelpfulness.cta.method_thumbs","1479238643",["ext.wikihow.methodhelpfulness.cta"]],["ext.wikihow.methodhelpfulness.cta.method_thumbs.desktop","1479238643",["ext.wikihow.methodhelpfulness.cta.method_thumbs"]],["ext.wikihow.methodhelpfulness.widget","1479238643",["ext.wikihow.common_bottom"]],["mobile.uploads.schema","1479234342",["ext.eventLogging"]],["mobile.watchlist.schema","1479234342",["ext.eventLogging"]],["mobile.editing.schema","1479234342",["ext.eventLogging"]],["schema.MobileWebCta","1479234342",["ext.eventLogging"]],[
"schema.MobileWebClickTracking","1479234342",["ext.eventLogging"]],["schema.MobileLeftNavbarEditCTA","1479234342",["ext.eventLogging"]]]);mw.config.set({"wgLoadScript":"/load.php","debug":false,"skin":"wikihowskin","stylepath":"/skins","wgUrlProtocols":"http\\:\\/\\/|https\\:\\/\\/|ftp\\:\\/\\/|ftps\\:\\/\\/|ssh\\:\\/\\/|sftp\\:\\/\\/|irc\\:\\/\\/|ircs\\:\\/\\/|xmpp\\:|sip\\:|sips\\:|gopher\\:\\/\\/|telnet\\:\\/\\/|nntp\\:\\/\\/|worldwind\\:\\/\\/|mailto\\:|tel\\:|sms\\:|news\\:|svn\\:\\/\\/|git\\:\\/\\/|mms\\:\\/\\/|bitcoin\\:|magnet\\:|urn\\:|geo\\:|\\/\\/","wgArticlePath":"/$1","wgScriptPath":"","wgScriptExtension":".php","wgScript":"/index.php","wgVariantArticlePath":false,"wgActionPaths":{},"wgServer":"//www.wikihow.com","wgCanonicalServer":"http://www.wikihow.com","wgUserLanguage":"en","wgContentLanguage":"en","wgVersion":"1.23wmf15","wgEnableAPI":true,"wgEnableWriteAPI":true,"wgMainPageTitle":"Main Page","wgFormattedNamespaces":{"-5":"Quiz","-4":"Doc","-3":"Widget","-2":"Media",
"-1":"Special","0":"","1":"Discussion","2":"User","3":"User talk","4":"wikiHow","5":"wikiHow talk","6":"Image","7":"Image talk","8":"MediaWiki","9":"MediaWiki talk","10":"Template","11":"Template talk","12":"Help","13":"Help talk","14":"Category","15":"Category talk","16":"Request","17":"Request talk","18":"User kudos","19":"User kudos talk","24":"Video","25":"Video talk","26":"VideoComments","27":"VideoComments talk","828":"Module","829":"Module talk"},"wgNamespaceIds":{"quiz":-5,"doc":-4,"widget":-3,"media":-2,"special":-1,"":0,"discussion":1,"user":2,"user_talk":3,"wikihow":4,"wikihow_talk":5,"image":6,"image_talk":7,"mediawiki":8,"mediawiki_talk":9,"template":10,"template_talk":11,"help":12,"help_talk":13,"category":14,"category_talk":15,"request":16,"request_talk":17,"user_kudos":18,"user_kudos_talk":19,"video":24,"video_talk":25,"videocomments":26,"videocomments_talk":27,"module":828,"module_talk":829,"talk":1,"project":4,"project_talk":5,"file":6,"file_talk":7},
"wgContentNamespaces":[0],"wgSiteName":"wikiHow","wgFileExtensions":["png","gif","jpg","jpeg","svg","pdf"],"wgDBname":"wikidb_112","wgFileCanRotate":true,"wgAvailableSkins":{"wikihowdesktopskin":"WikihowDesktopSkin","wikihowskinhelper":"WikihowSkinHelper","wikihowskin":"WikiHowSkin","wikihowtemplate":"WikihowTemplate","wikihowheaderbuilder":"WikihowHeaderBuilder"},"wgExtensionAssetsPath":"/extensions","wgCookiePrefix":"wiki_shared","wgCookieDomain":"wikihow.com","wgResourceLoaderMaxQueryLength":-1,"wgCaseSensitiveNamespaces":[],"wgLegalTitleChars":" %!\"$\u0026'()*,\\-./0-9:;=?@A-Z\\\\\\^_`a-z~+\\u0080-\\uFFFF","wgResourceLoaderStorageVersion":1,"wgResourceLoaderStorageEnabled":false,"wgEventLoggingBaseUri":false,"wgStopMobileRedirectCookie":{"name":"wiki_nombl","duration":1,"domain":".wikihow.com","path":"/"},"wgMFNearbyEndpoint":"","wgMFNearbyNamespace":0,"wgMFKeepGoing":false,"wgDraftAutoSaveWait":120,"wgDraftAutoSaveTimeout":20,"wgDraftAutoSaveInputBased":false});};if(isCompatible(
)){document.write("\u003Cscript src=\"/load.php?debug=false\u0026amp;lang=en\u0026amp;modules=jquery%2Cmediawiki\u0026amp;only=scripts\u0026amp;siterev=3497cf\u0026amp;skin=wikihowskin\"\u003E\u003C/script\u003E");}delete isCompatible;
/* cache key: wikidb_112:resourceloader:filter:minify-js:7:9f20157b2c24625fb811cdc118c41158 */