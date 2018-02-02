
var revisionDate = "2016-11-03";

if (top.location != location) top.location.href = location.href;	// escape from frames

window.name = "OneBag"  // name current window

function popWin(dis,h,w) {
	window.open(dis.href,dis.target,"height=" + h + ",width=" + w + ",top=" + (screen.height-h)/2 + ",left=" + (screen.width-w)/2 + ",scrollbars=1, toolbar=0").focus();
	return false;
}

function Availability() {
    document.write('<p class="double"><em class="small">Many of <b>the very best products</b> are simply not available at your local shopping mall. This is often because they are made by companies that eschew distribution networks and sales intermediaries&thinsp;&mdash;&thinsp;and the associated markups for both&thinsp;&mdash;&thinsp;in favour of higher quality manufacturing (and better warranties). Fortunately, the Internet has made the <b>worldwide availability</b> of such items much easier. So, where possible, I provide <b>contact information</b> for many of the products &amp; manufacturers mentioned on this site; you\'ll find such information on the <a href="rsrc.html">Suppliers</a> page. And remember that Google is your friend.</em></p>');
}

function PlaceAd() {        /* AdSense Responsive Ad */
    document.write('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2852904351999801" data-ad-slot="3057565625" data-ad-format="auto"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');
}

/* function PlaceLinks() {  AdSense Links
    document.write('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- OneBag Links --><ins class="adsbygoogle" style="display:inline-block;max-width:468px;height:15px" data-ad-client="ca-pub-2852904351999801" data-ad-slot="6077028481"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');
} */

/* function PlaceLinksWide() {  Adsense Wide Links
    document.write('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- OneBag Wide Links --><ins class="adsbygoogle" style="display:inline-block;width:728px;height:15px" data-ad-client="ca-pub-2852904351999801" data-ad-slot="7624333812"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');
} */

function header(quotation) {	// common HTML for top of main pages

// insert logo
document.write('<a href="#q" class="logo"><img src="images/onebag-title.png" width="262" height="284" alt="One Bag - The Art and Science of Travelling Light" title="One Bag - The Art and Science of Travelling Light"></a>');

// insert accordion menu
document.write('<div id="accordion"><ul><li>\
      <h6>Arrivals<img src="images/home_icon.png" width="106" height="33" alt="home" title="home" style="vertical-align: bottom;"></h6><ul>\
        <li><a href="index.html"><img class="icon" src="images/home-icon.png" width="18" height="16"> Lighten your Load</a></li>\
        <li><a href="about.html">About OneBag.com</a></li>\
        <li><a href="author.html">About the Author</a></li>\
        <li><a href="media.html">Media Coverage</a></li>\
      </ul></li><li>\
      <h6>What To Pack</h6><ul>\
        <li><a href="list.html">Using A Packing List</a></li>\
        <li><a href="checklist.html">One-Page Checklist</a></li>\
        <li><a href="weight-watching.html">Weight Watching</a></li>\
        <li><a href="travel-clothes.html">Choosing Clothes</a></li>\
        <li><a href="travel-laundry.html">Looking at Laundry</a></li>\
        <li><a href="electrical.html">Electrical Products</a></li>\
        <li><a href="prohibited.html">Prohibited Items</a></li>\
        <li><a href="safety.html">Safety &amp; Security</a></li>\
        <li><a href="packing-list.html"><span class="small">see also:</span> Packing List</a></li>\
      </ul></li><li>\
      <h6>What To Pack It In</h6><ul>\
        <li><a href="bags.html">Choosing A Bag</a></li>\
        <li><a href="business-bags.html">Business Travel Bags</a></li>\
        <li><a href="leisure-bags.html">Leisure Travel Bags</a></li>\
        <li><a href="dual-purpose-bags.html">Dual-Purpose Bags</a></li>\
        <li><a href="day-bags.html">Day Travel Bags</a></li>\
        <li><a href="wheeled-bags.html">Wheeled Bags (?)</a></li>\
        <li><a href="expandable-bags.html">Expandable Bags (?)</a></li>\
</ul></li><li>\
      <h6>How To Pack It</h6><ul>\
        <li><a href="pack.html">Packing Clothes</a></li>\
        <li><a href="packing-liquids.html">Packing Liquids</a></li>\
        <li><a href="useful-packing-tips.html">Useful Packing Tips</a></li>\
        <li><a href="checking-bags.html">Checking Bags</a></li>\
        <li><a href="travel-with-children.html">Travel With Children</a></li>\
      </ul></li><li>\
      <h6>A Packing List</h6><ul>\
        <li><a href="packing-list.html">Introduction</a></li>\
        <li><a href="packing-list-wardrobe.html">Wardrobe</a></li>\
        <li><a href="packing-list-luggage.html">Luggage</a></li>\
        <li><a href="packing-list-tools.html">Tools</a></li>\
        <li><a href="packing-list-repairs.html">Repairs</a></li>\
        <li><a href="packing-list-toiletries.html">Toiletries</a></li>\
        <li><a href="packing-list-comforts.html">Comforts</a></li>\
        <li><a href="packing-list-laundry.html">Laundry</a></li>\
        <li><a href="packing-list-health.html">Health</a></li>\
        <li><a href="packing-list-paperwork.html">Paperwork</a></li>\
        <li><a href="packing-list-valuables.html">Valuables</a></li>\
        <li><a href="packing-list-specialty.html">Specialty Items</a></li>\
      </ul></li><li>\
      <h6>Resources</h6><ul>\
        <li><a href="rsrc.html">Suppliers</a></li>\
        <li><a href="link.html">TraveLinks</a></li>\
        <li><a href="mail.html">TraveLetters</a></li>\
        <li><a href="book.html">TraveLibrary</a></li>\
        <li><a href="lore.html">TraveLore</a></li>\
        <li><a href="internet-cafes.html">Internet Caf&eacute;s</a></li>\
        <li><a href="industry.html">Travel Industry Links</a></li>\
      </ul></li><li>\
      <h6>Departures</h6><ul>\
        <li><a href="to-do-list.html">Before You Leave</a></li>\
        <li><a href="exam.html">Final Exam</a></li>\
        <li><a href="feedback.shtml">Feedback / Contact</a></li>\
        <li><a href="tags.html">Luggage Tags</a></li>\
      </ul></li><li>\
      <h6><img src="images/search_icon.png" width="27" height="33" alt="search" title="search"><img src="images/translate_icon.png" width="40" height="33" alt="translate" title="translate"><img src="images/sitemap_icon.png" width="45" height="33" alt="site map" title="site map"><img src="images/share_icon.png" width="45" height="33" alt="share" title="share"></h6><ul>\
        <li><a href="search.html">Search This Site</a></li>\
        <li><a href="about.html#translate">Translate This Site</a></li>\
        <li><a href="popups/sitemap.html" target="sitemap" onclick="return popWin(this,610,470);">OneBag Site Map</a></li>\
        <li><a class="st_sharethis_custom"><img class="icon" src="images/share-icon.png" width="20" height="16"> Share This Page</a></li>\
      </ul></li></ul>\
</div><br><p id="q" class="quote">' + quotation + '</p>');
}
	
function footer(contribute, prev, next) {	// common HTML for bottom of main pages
	
// insert availability announcement (on packing list pages)
if (location.pathname.split("/").pop().slice(0,13)=="packing-list-") {
	Availability();
}

// insert request for contributions (if selected)
if (contribute) {
	document.write('<br class="unfloat"><h2>');
switch(Math.floor(Math.random()*3)) {
	case 0:
	case 1: document.write('Keep OneBag Independent!<a class="st_sharethis_custom"><img src="images/share-icon.png" alt="Share this page!" title="Share this page!"></a></h2><p>For almost two decades, I have managed to keep OneBag.com free of charge; I sell no products, accept no sponsorships, and do all of the work myself (design, graphics, implementation, and&thinsp;&mdash;&thinsp;quotations aside&thinsp;&mdash;&thinsp;every word on these pages is mine alone). But the maintenance of such a site is not an inexpensive proposition: it would soon cease its commercially-independent existence without the ongoing support of readers like you. So if you\'ve found the information here of value, please consider contributing&thinsp;&mdash;&thinsp;if only modestly&thinsp;&mdash;&thinsp;to this effort. Here are three ways in which <b>you</b> can support the OneBag project:</p>'); break;
	case 2: document.write('Join the OneBag Brigade!<a class="st_sharethis_custom"><img src="images/share-icon.png" alt="Share this page!" title="Share this page!"></a></h2><p>Help others to discover <i>OneBag</i>\'s message about the <a href="mail.html">life-changing benefits of travelling lightly</a>. Help us all to reduce the horrendous load imposed on our transportation systems&thinsp;&mdash;&thinsp;and the earth\'s resources&thinsp;&mdash;&thinsp;by people hauling tons of unnecessary stuff around the planet. Here are three ways in which <b>you</b> can contribute:</p>');
        }
	document.write('<p><div class="inline-wrapper"></p>');
        document.write('<div class="inline-box"><b class="gold">Make a <em>donation</em></b>. Any amount,<br />large or small, helps support this<br />non-commercial site. It\'s simple<br />and quick with this button:<br /><form action="https://www.paypal.com/cgi-bin/webscr" method="post"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="PRGE42VWX2KVY"><input type="image" src="images/button-donate.png" width="175" height="30" style="display:block; margin: 7px auto;" name="submit" alt="Make a donation with PayPal &mdash; it\'s fast, free, and secure!" title="Make a donation with PayPal &mdash; it\'s fast, free, and secure!"></form></div>');
	document.write('<div class="inline-box"><b class="gold">Tell a <em>friend</em></b>. Better still, tell<br />everyone! This button makes<br />it easy to share your OneBag<br />discovery with others:<br /><span class="st_sharethis_custom"><img src="images/button-share.png" width="175" height="30" style="display:block; margin: 7px auto;" alt="Share This Information with Friends" title="Share This Information with Friends"></span></div>');
	document.write('<div class="inline-box"><b class="gold">Engage a <em>speaker</em></b>. Could you use<br />a topical, informative, entertaining<br />presentation for an upcoming event?<br />Then this button is for you:<br /><a href="author.html#speaking"><img src="images/button-speaker.png" width="175" height="30" style="display:block; margin: 7px auto;" alt="The Go-Light Guru Speaks!" title="The Go-Light Guru Speaks!"></a></div>');
	document.write('</div>');
    }

// insert copyright, revision dates, and various buttons
document.write('<br class="unfloat"></div><div id="footer" style="margin: 0 20px; border-top:2px solid #e51919;"><p><a href="http://www.facebook.com/#!/pages/The-Go-Light-Guru/120799051266664" target="_blank"><img src="images/facebook-button-small.png" width="32" height="32" alt="Follow The Go-Light Guru on Facebook" title="Follow The Go-Light Guru on Facebook" /></a><a href="http://www.twitter.com/golightguru" target="_blank"><img src="images/twitter-button-small.png" width="32" height="32" alt="Follow golightguru on Twitter" title="Follow golightguru on Twitter" style="padding: 0 56px;" /></a><a href="http://www.onebag.com/updates.xml"><img src="images/rss-button-small.png" width="32" height="32" alt="Subscribe to the RSS Feed" title="Subscribe to the RSS Feed" /></a></p><p><i>&copy; 1994&ndash;2016, <a href="feedback.shtml" title="contact me via the Feedback page">Doug Dyment</a><br /><a href="terms.html">Terms &amp; Conditions of Use</a> apply<br />Most Recent Update: ' + revisionDate + '</i></p><div style="margin-top:10px;">' + (prev ? '<a href="' + prev + (prev=="feedback" ? '.s' : '.') + 'html#q"><img alt="previous page" title="previous page" src="images/' : '<img src="images/d') + 'left-icon.png" width="40" height="40" />' + (prev ? '</a>' : '' ) + ' &nbsp; &nbsp; <a href="#"><img alt="top of page" title="top of page" src="images/top-icon.png" width="40" height="40" /></a> &nbsp; &nbsp; ' + (next ? '<a href="' + next + (next=="feedback" ? '.s' : '.') + 'html#q"><img alt="next page" title="next page" src="images/' : '<img src="images/d') + 'right-icon.png" width="40" height="40" />' + (next ? '</a>' : '' ) + '</div>');
}


// jQuery functionality for accordion menu
$(document).ready(function(){
	$("#accordion h6").click(function(){
		// slide up all the link lists
		$("#accordion ul ul").slideUp();
		// slide down the link list below the h3 clicked - only if it's closed
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
	})
})