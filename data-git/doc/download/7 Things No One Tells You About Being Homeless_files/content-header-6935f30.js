var CKDFP=CKDFP||{};CKDFP.delayedSyncAdSlotTriggerPoint=500;CKDFP.delayedSyncAdSlots=[];CKDFP.delayedSyncAdLoadSlots=[];CKDFP.delayedSyncAdRefreshSlots=[];CKDFP.delaySyncSlot=function(a){CKDFP.delayedSyncAdConditionBind(a)};CKDFP.callDelayedSyncSlot=function(a){"undefined"!==typeof a&&(CKDFP.delayedSyncAdConditionUnbind(a),googletag.pubads().enableSyncRendering(),googletag.enableServices(),googletag.display(a))};
CKDFP.delayedSyncAdConditionBind=function(a){var b=document.getElementById(a);CKDFP.delayedSyncAdLoadSlots.push({slotId:a,nodeObj:b})};CKDFP.delayedSyncAdRefreshConditionBind=function(a){var b=document.getElementById(a);CKDFP.delayedSyncAdRefreshSlots.push({slotId:a,nodeObj:b})};
CKDFP.delayedSyncAdConditionUnbind=function(a){for(var b=[],c=0,d=this.delayedSyncAdLoadSlots.length;c<d;c++)CKDFP.delayedSyncAdLoadSlots[c].slotId!=a&&b.push(CKDFP.delayedSyncAdLoadSlots[c]);CKDFP.delayedSyncAdLoadSlots=b};
CKDFP.initDelayedSyncAd=function(){var a=this;dmjs.customEvent(window,"scroll",function(){var b=parseInt(document.documentElement.scrollTop||document.body.scrollTop)+window.innerHeight;if(0<a.delayedSyncAdLoadSlots.length){var c=a.delayedSyncAdLoadSlots[0];c.nodeObj.getBoundingClientRect().top+parseInt(document.documentElement.scrollTop||document.body.scrollTop)-b<=a.delayedSyncAdSlotTriggerPoint&&CKDFP.callDelayedSyncSlot(c.slotId)}})};

var ResponsiveSimpleReach=function(){var d={},e=null,b=null,e=b=document.referrer;return{setReachConfig:function(a,b,c){d[a+":"+b]=c},runReachCollect:function(a,f,c){if("undefined"!=typeof __ajax_reach_config&&(a=a+":"+f,"undefined"!==typeof d[a]&&(a=d[a],"undefined"==typeof c&&(a.page_url=window.location.href),"undefined"!=typeof c||a.url!=__ajax_reach_config.url))){a.url!=b&&(b=e,e=a.url);a.ref_url=b;__ajax_reach_config=a;try{SPR.Reach.collect(a)}catch(g){}}}}}();