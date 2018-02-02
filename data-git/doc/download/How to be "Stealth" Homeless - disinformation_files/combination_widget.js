

function dsqComboTab(tab) {
	document.getElementById('dsq-combo-people').style.display = "none";
	document.getElementById('dsq-combo-popular').style.display = "none";
	document.getElementById('dsq-combo-recent').style.display = "none";
	document.getElementById('dsq-combo-tab-people').className = "dsq-combo-tab";
	document.getElementById('dsq-combo-tab-popular').className = "dsq-combo-tab";
	document.getElementById('dsq-combo-tab-recent').className = "dsq-combo-tab";

	document.getElementById('dsq-combo-' + tab).style.display = "block";
	document.getElementById('dsq-combo-tab-' + tab).className = "dsq-combo-tab dsq-active";
}

document.write(' \
<style type="text/css" media="screen">\
	 #dsq-combo-widget ul,\
	 #dsq-combo-widget li,\
	 #dsq-combo-widget ol,\
	 #dsq-combo-widget div,\
	 #dsq-combo-widget p,\
	 #dsq-combo-widget a,\
	 #dsq-combo-widget cite,\
	 #dsq-combo-widget img {\
	 border: 0;\
	 padding: 0;\
	 margin: 0;\
	 float: none;\
	 text-indent: 0;\
	 background: none;\
	 }\
	 #dsq-combo-widget ul,\
	 #dsq-combo-widget li,\
	 #dsq-combo-widget ol {\
	 list-style-type: none;\
	 list-style-image: none;\
	 background: none;\
	 display: block;\
	 }\
	 #dsq-combo-widget #dsq-combo-content ul,\
	 #dsq-combo-widget #dsq-combo-content li,\
	 #dsq-combo-widget #dsq-combo-content ol,\
	 #dsq-combo-widget #dsq-combo-content div,\
	 #dsq-combo-widget #dsq-combo-content p,\
	 #dsq-combo-widget #dsq-combo-content a,\
	 #dsq-combo-widget #dsq-combo-content cite,\
	 #dsq-combo-widget #dsq-combo-content img {\
	 border: 0;\
	 padding: 0;\
	 margin: 0;\
	 float: none;\
	 text-indent: 0;\
	 background: none;\
	 }\
	 #dsq-combo-widget #dsq-combo-content ul,\
	 #dsq-combo-widget #dsq-combo-content li,\
	 #dsq-combo-widget #dsq-combo-content ol {\
	 list-style-type: none;\
	 list-style-image: none;\
	 background: none;\
	 display: block;\
	 }\
	 .dsq-clearfix:after {\
	 content:".";\
	 display: block;\
	 height: 0;\
	 clear: both;\
	 visibility: hidden;\
	 }\
	 /* end reset */\
	 #dsq-combo-widget { ;\
	 text-align: left;\
	 }\
	 #dsq-combo-widget #dsq-combo-tabs {\
	 float: left;\
	 }\
	 #dsq-combo-widget #dsq-combo-content {\
	 position: static;\
	 }\
	 #dsq-combo-widget #dsq-combo-content h3 {\
	 float: none;\
	 text-indent: 0;\
	 background: none;\
	 padding: 0;\
	 border: 0;\
	 margin: 0 0 10px 0;\
	 font-size: 16px;\
	 }\
	 #dsq-combo-widget #dsq-combo-tabs li {\
	 display: inline;\
	 float: left;\
	 margin-right: 2px;\
	 padding: 0px 5px;\
	 text-transform: uppercase;\
	 }\
	 #dsq-combo-widget #dsq-combo-tabs li a {\
	 text-decoration: none;\
	 font-weight: bold;\
	 font-size: 10px;\
	 }\
	 #dsq-combo-widget #dsq-combo-content .dsq-combo-box {\
	 margin: 0 0 20px;\
	 padding: 12px;\
	 clear: both;\
	 }\
	 #dsq-combo-widget #dsq-combo-content .dsq-combo-box li {\
	 padding-bottom: 10px;\
	 margin-bottom: 10px;\
	 overflow: hidden;\
	 word-wrap: break-word;\
	 }\
	 #dsq-combo-widget #dsq-combo-content .dsq-combo-avatar {\
	 float: left;\
	 height: 48px;\
	 width: 48px;\
	 margin-right: 15px;\
	 }\
	 #dsq-combo-widget #dsq-combo-content .dsq-combo-box cite {\
	 font-weight: bold;\
	 font-size: 14px;\
	 }\
	 span.dsq-widget-clout {\
	 background-color:#FF7300;\
	 color:#FFFFFF;\
	 padding:0pt 2px;\
	 }\
	 #dsq-combo-logo { text-align: right; }\
	 /* Blue */\
	 #dsq-combo-widget.blue #dsq-combo-tabs li.dsq-active { background: #E1F3FC; }\
	 #dsq-combo-widget.blue #dsq-combo-content .dsq-combo-box { background: #E1F3FC; }\
	 #dsq-combo-widget.blue #dsq-combo-tabs li { background: #B5E2FD; }\
	 #dsq-combo-widget.blue #dsq-combo-content .dsq-combo-box li { border-bottom: 1px dotted #B5E2FD; }\
	 /* Grey */\
	 #dsq-combo-widget.grey #dsq-combo-tabs li.dsq-active { background: #f0f0f0; }\
	 #dsq-combo-widget.grey #dsq-combo-content .dsq-combo-box { background: #f0f0f0; }\
	 #dsq-combo-widget.grey #dsq-combo-tabs li { background: #ccc; }\
	 #dsq-combo-widget.grey #dsq-combo-content .dsq-combo-box li { border-bottom: 1px dotted #ccc; }\
	 /* Green */\
	 #dsq-combo-widget.green #dsq-combo-tabs li.dsq-active { background: #f4ffea; }\
	 #dsq-combo-widget.green #dsq-combo-content .dsq-combo-box { background: #f4ffea; }\
	 #dsq-combo-widget.green #dsq-combo-tabs li { background: #d7edce; }\
	 #dsq-combo-widget.green #dsq-combo-content .dsq-combo-box li { border-bottom: 1px dotted #d7edce; }\
	 /* Red */\
	 #dsq-combo-widget.red #dsq-combo-tabs li.dsq-active { background: #fad8d8; }\
	 #dsq-combo-widget.red #dsq-combo-content .dsq-combo-box { background: #fad8d8; }\
	 #dsq-combo-widget.red #dsq-combo-tabs li { background: #fdb5b5; }\
	 #dsq-combo-widget.red #dsq-combo-content .dsq-combo-box li { border-bottom: 1px dotted #fdb5b5; }\
	 /* Orange */\
	 #dsq-combo-widget.orange #dsq-combo-tabs li.dsq-active { background: #fae6d8; }\
	 #dsq-combo-widget.orange #dsq-combo-content .dsq-combo-box { background: #fae6d8; }\
	 #dsq-combo-widget.orange #dsq-combo-tabs li { background: #fddfb5; }\
	 #dsq-combo-widget.orange #dsq-combo-content .dsq-combo-box li { border-bottom: 1px dotted #fddfb5; }\
	 </style>\
	 <div id="dsq-combo-widget" class="grey">\
	 <ul id="dsq-combo-tabs">\
	 <li id="dsq-combo-tab-people" ><a href="#" onclick="dsqComboTab(\'people\'); return false">People</a></li>\
	 <li id="dsq-combo-tab-recent" ><a href="#" onclick="dsqComboTab(\'recent\'); return false">Recent</a></li>\
	 <li id="dsq-combo-tab-popular" class="dsq-active"><a href="#" onclick="dsqComboTab(\'popular\'); return false">Popular</a></li>\
	 </ul>\
	 <div id="dsq-combo-content">\
	 <div id="dsq-combo-people" class="dsq-combo-box" style="display:none">\
	 <h3>Top Commenters</h3>\
	 <ul>\
	 <li class="dsq-clearfix">\
	 <a href="https://disqus.com/by/BuzzCoastin/">\
	 <img class="dsq-combo-avatar" src="//a.disquscdn.com/uploads/users/385/8168/avatar92.jpg?1408763038">\
	 </a>\
	 <cite><a href="https://disqus.com/by/BuzzCoastin/">BuzzCoastin</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;11564 posts</div>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="https://disqus.com/by/echar/">\
	 <img class="dsq-combo-avatar" src="//a.disquscdn.com/uploads/users/3395/6517/avatar92.jpg?1473187846">\
	 </a>\
	 <cite><a href="https://disqus.com/by/echar/">Lailoken</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;6885 posts</div>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="https://disqus.com/by/Wanooski/">\
	 <img class="dsq-combo-avatar" src="//a.disquscdn.com/uploads/users/1738/9378/avatar92.jpg?1473217995">\
	 </a>\
	 <cite><a href="https://disqus.com/by/Wanooski/">TJ Barke</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;5547 posts</div>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="https://disqus.com/by/Jin_The_Ninja/">\
	 <img class="dsq-combo-avatar" src="//a.disquscdn.com/uploads/users/1375/4255/avatar92.jpg?1342337527">\
	 </a>\
	 <cite><a href="https://disqus.com/by/Jin_The_Ninja/">Jin The Ninja</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;5144 posts</div>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="https://disqus.com/by/InfvoCuernos/">\
	 <img class="dsq-combo-avatar" src="//a.disquscdn.com/uploads/users/3020/7649/avatar92.jpg?1352526143">\
	 </a>\
	 <cite><a href="https://disqus.com/by/InfvoCuernos/">InfvoCuernos</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;4342 posts</div>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="https://disqus.com/by/Liam_McGonagle/">\
	 <img class="dsq-combo-avatar" src="//a.disquscdn.com/uploads/users/451/2296/avatar92.jpg?1383754798">\
	 </a>\
	 <cite><a href="https://disqus.com/by/Liam_McGonagle/">Liam_McGonagle</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;3376 posts</div>\
	 </li>\
	 </ul>\
	 <div id="dsq-combo-logo"><a href="http://disqus.com"><img src="//a.disquscdn.com/1479321018/images/embed/widget-logo.png"></a></div>\
	 </div>\
	 <div id="dsq-combo-recent" class="dsq-combo-box" style="display:none">\
	 <h3>Recent Comments</h3>\
	 <ul>\
	 <li class="dsq-clearfix">\
	 <a href="https://disqus.com/by/virtuallyyours/"><img class="dsq-combo-avatar" src="//a.disquscdn.com/uploads/users/6495/6334/avatar92.jpg?1375279857"></a>\
	 <a class="dsq-widget-user" href="https://disqus.com/by/virtuallyyours/">Virtually Yours</a>\
	 <span class="dsq-widget-comment"><p>Am just waiting for the day when he has a massive coronary live on air. Gargles out his last breath in a splutter of blood- and bacon-flecked froth. It will be...supremely satisfying.</p></span>\
	 <p class="dsq-widget-meta"><a href="http://disinfo.com/2016/11/how-alex-jones-conspiracy-theorist-extraordinaire-got-donald-trumps-ear/">How Alex Jones, conspiracy theorist extraordinaire, got Donald Trump’s ear</a>&nbsp;&middot;&nbsp;<a href="http://disinfo.com/2016/11/how-alex-jones-conspiracy-theorist-extraordinaire-got-donald-trumps-ear/#comment-3007679716">1 hour ago</a></p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="https://disqus.com/by/Liam_McGonagle/"><img class="dsq-combo-avatar" src="//a.disquscdn.com/uploads/users/451/2296/avatar92.jpg?1383754798"></a>\
	 <a class="dsq-widget-user" href="https://disqus.com/by/Liam_McGonagle/">Liam_McGonagle</a>\
	 <span class="dsq-widget-comment"><p>Maybe.  Maybe not.</p><p>There\'s always a valid analogy.  An analogy with limits, but I highly doubt American and British societies are that different.</p></span>\
	 <p class="dsq-widget-meta"><a href="http://disinfo.com/2016/11/donald-trump-enemy-left-always-needed/">Donald Trump is the Enemy The Left Has Always Needed</a>&nbsp;&middot;&nbsp;<a href="http://disinfo.com/2016/11/donald-trump-enemy-left-always-needed/#comment-3007655240">1 hour ago</a></p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="https://disqus.com/by/Liam_McGonagle/"><img class="dsq-combo-avatar" src="//a.disquscdn.com/uploads/users/451/2296/avatar92.jpg?1383754798"></a>\
	 <a class="dsq-widget-user" href="https://disqus.com/by/Liam_McGonagle/">Liam_McGonagle</a>\
	 <span class="dsq-widget-comment"><p>I don\'t think peasants are just a blank slate. At a bare minimum they have the choice between two sets of elites challenging each other for hegemony. None of those elites are really championing...</p></span>\
	 <p class="dsq-widget-meta"><a href="http://disinfo.com/2016/11/donald-trump-enemy-left-always-needed/">Donald Trump is the Enemy The Left Has Always Needed</a>&nbsp;&middot;&nbsp;<a href="http://disinfo.com/2016/11/donald-trump-enemy-left-always-needed/#comment-3007653563">1 hour ago</a></p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="https://disqus.com/by/baronoshima/"><img class="dsq-combo-avatar" src="//a.disquscdn.com/uploads/forums/18/3669/avatar92.jpg?1427745295"></a>\
	 <a class="dsq-widget-user" href="https://disqus.com/by/baronoshima/">Baron Oshima</a>\
	 <span class="dsq-widget-comment"><p>Instead of a Country/City divide in the USA maybe this has to with social class. Class is sometimes most Americans (Right AND Left) avoid talking about for reasons which I have never understood....</p></span>\
	 <p class="dsq-widget-meta"><a href="http://disinfo.com/2016/11/no-half-america-didnt-just-lose-fcking-minds-intentionally-driven-insane/">No, Half of America Didn&#8217;t Just Lose Their F*cking Minds, They Were Intentionally Driven Insane.</a>&nbsp;&middot;&nbsp;<a href="http://disinfo.com/2016/11/no-half-america-didnt-just-lose-fcking-minds-intentionally-driven-insane/#comment-3007650754">1 hour ago</a></p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="https://disqus.com/by/disqus_oTr7NTMP4L/"><img class="dsq-combo-avatar" src="//a.disquscdn.com/uploads/users/6182/4873/avatar92.jpg?1399074895"></a>\
	 <a class="dsq-widget-user" href="https://disqus.com/by/disqus_oTr7NTMP4L/">Mr B</a>\
	 <span class="dsq-widget-comment"><p>I live in Britain, so maybe the above\'s irrelevant.</p></span>\
	 <p class="dsq-widget-meta"><a href="http://disinfo.com/2016/11/donald-trump-enemy-left-always-needed/">Donald Trump is the Enemy The Left Has Always Needed</a>&nbsp;&middot;&nbsp;<a href="http://disinfo.com/2016/11/donald-trump-enemy-left-always-needed/#comment-3007636497">1 hour ago</a></p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="https://disqus.com/by/disqus_oTr7NTMP4L/"><img class="dsq-combo-avatar" src="//a.disquscdn.com/uploads/users/6182/4873/avatar92.jpg?1399074895"></a>\
	 <a class="dsq-widget-user" href="https://disqus.com/by/disqus_oTr7NTMP4L/">Mr B</a>\
	 <span class="dsq-widget-comment"><p>What intrigues me is the recent civil division in both the UK &amp; US, which, imo, is contrived by the heavily indebted establishment. Not obviously for them to conquer, which would be pointless, but...</p></span>\
	 <p class="dsq-widget-meta"><a href="http://disinfo.com/2016/11/donald-trump-enemy-left-always-needed/">Donald Trump is the Enemy The Left Has Always Needed</a>&nbsp;&middot;&nbsp;<a href="http://disinfo.com/2016/11/donald-trump-enemy-left-always-needed/#comment-3007615153">2 hours ago</a></p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="https://disqus.com/by/BuzzCoastin/"><img class="dsq-combo-avatar" src="//a.disquscdn.com/uploads/users/385/8168/avatar92.jpg?1408763038"></a>\
	 <a class="dsq-widget-user" href="https://disqus.com/by/BuzzCoastin/">BuzzCoastin</a>\
	 <span class="dsq-widget-comment"><p>&gt;It\'s the hate and mass appeal of that hate that legitimately should worry people. W. &amp; his Dick did more to instigate race hate than Trumpy ever can W. &amp; his Dick started 2 ongoing wars against...</p></span>\
	 <p class="dsq-widget-meta"><a href="http://disinfo.com/2016/11/donald-trump-enemy-left-always-needed/">Donald Trump is the Enemy The Left Has Always Needed</a>&nbsp;&middot;&nbsp;<a href="http://disinfo.com/2016/11/donald-trump-enemy-left-always-needed/#comment-3007608044">2 hours ago</a></p>\
	 </li>\
	 </ul>\
	 <div id="dsq-combo-logo"><a href="http://disqus.com"><img src="//a.disquscdn.com/1479321018/images/embed/widget-logo.png"></a></div>\
	 </div>\
	 <div id="dsq-combo-popular" class="dsq-combo-box" >\
	 <h3>Most Discussed</h3>\
	 <ul>\
	 <li class="dsq-clearfix">\
	 <a class="dsq-widget-thread" href="http://disinfo.com/2016/11/donald-trump-enemy-left-always-needed/">Donald Trump is the Enemy The Left Has Always Needed</a>\
	 <p class="dsq-widget-meta">41 comments &middot; 1 hour ago</p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a class="dsq-widget-thread" href="http://disinfo.com/2016/11/ultimate-trial-american-liberals-call-reckoning-unity/">The Ultimate Trial of American Liberals: A Call for Reckoning and Unity</a>\
	 <p class="dsq-widget-meta">109 comments &middot; 2 days ago</p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a class="dsq-widget-thread" href="http://disinfo.com/2016/11/no-half-america-didnt-just-lose-fcking-minds-intentionally-driven-insane/">No, Half of America Didn&#8217;t Just Lose Their F*cking Minds, They Were Intentionally Driven Insane.</a>\
	 <p class="dsq-widget-meta">37 comments &middot; 1 hour ago</p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a class="dsq-widget-thread" href="http://disinfo.com/2016/11/for-the-trump-era-fight-not-flight/">For the Trump Era: Fight Not Flight</a>\
	 <p class="dsq-widget-meta">64 comments &middot; 2 days ago</p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a class="dsq-widget-thread" href="http://disinfo.com/2016/11/official-gonzo-conjure-16-election-prediction/">The Official Gonzo &#038; Conjure &#8217;16 Election Prediction</a>\
	 <p class="dsq-widget-meta">74 comments &middot; 3 days ago</p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a class="dsq-widget-thread" href="http://disinfo.com/?p=152769">Bernie Sanders Never Sold Out and If You Don’t Vote You’re Dumber than F*cking Rocks</a>\
	 <p class="dsq-widget-meta">100 comments &middot; 1 week ago</p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a class="dsq-widget-thread" href="http://disinfo.com/2016/11/dangerous-myths-about-trump-that-some-progressives-cling-to/">Dangerous Myths About Trump That Some Progressives Cling To</a>\
	 <p class="dsq-widget-meta">53 comments &middot; 4 days ago</p>\
	 </li>\
	 </ul>\
	 <div id="dsq-combo-logo"><a href="http://disqus.com"><img src="//a.disquscdn.com/1479321018/images/embed/widget-logo.png"></a></div>\
	 </div>\
	 </div>\
	 </div>\
');
