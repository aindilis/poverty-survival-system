// clock JS
// cID	= the id of the element containing the clock #
// tickrate	= the desired clicks / sec.	Default = 2
// cents  = 1 for cents.		Default = 0
// This clock is generic except for the first 3 lines of data

function goClock(cID, tickrate, dollar, cents) {
		
		var T0 = "2016:10:24:11";		//<==GNDdate==	Starting time.
		var X  = 19788020688520.53;		//<==GND==	Starting amount (GND)
		var dX = 1140;					//<==rate==	Change in $ billion / year
			
		T0 = str2date(T0);							// T0 in seconds scince 1970 GMT
		var Tstart	= (new Date ())/1000;			// Seconds since 1970 GMT
		var Xps 	= dX*1000000000/(365*24*60*60);	// Change in X per second
		var Xstart	= X + Xps*(Tstart - T0);		// Value of X at start of clock
			 
		var dlay = 1000/tickrate;						// delay in ms between clicks
		var tag = document.getElementById(cID);
			
		if ( tickrate	== undefined ) 	tickrate = 2;
		DS = "$"; if ( dollar == 0 )	DS = "";
		if ( cents		== undefined ) 	cents = 0;
		looper();
		function looper() {
			var dT = (new Date ())/1000 - Tstart;
			var xNow = Xstart + Xps * dT;
			tag.innerHTML = DS + num2strC(xNow, cents);
			setTimeout( function () {looper()}, dlay);
		}
			
		function str2date(str)	{	// converts 'y:m:d:h:m:s' to (y, m, d, h, m, s) and then to seconds since 1970 GMT
			var s = str;			// Less significant parts can be dropped, but sting must not end with ':'
			var dA = new Array(7);	// 2004:4 is the beggining of March 31. 2004:4:1 is the beginning of April 1.
			var i, ndx, s0;
			for (i=1; i<7; i++) {		// off gives GMT offset in hours from local str time. DC is 4 (daylight) or 5 (winter)
				if (s.length) {
				     ndx = s.indexOf(':')
				     if (ndx==-1) { s0 = s; s = ''; }
				     else	 s0 = s.substring(0, ndx);
				  }
				  else   s0 = 0;
				  if (i==2) s0 -= 1;  // Months go from 0 to 11 in JS
				  dA[i] = s0;
				  s = s.substring(ndx+1);
			}
			dA[4] =dA[4]*1 + 4;		// 4 is diff between W.DC time and GMT
			return (Date.UTC(dA[1], dA[2], dA[3], dA[4], dA[5], dA[6]))/1000	// date in secs since 1970
		}
			
		function num2strC(xNum,cents) {
			var d, s, s1, s2;
			if (cents=='1') d=2; else d=0; 
			s=xNum.toFixed(d);
			s = s.split('.');
			s1 = s[0];
			s2 = s.length > 1 ? '.' + s[1] : '';
			var rgx = /(\d+)(\d{3})/;
			while (rgx.test(s1)) {
				s1 = s1.replace(rgx, '$1' + ',' + '$2');
			}
			return s1 + s2;
		}
}