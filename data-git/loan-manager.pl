desires('<REDACTED>',purchase(qty(airFilterHAPF600D,2))).
prevents(airFilterHAPF600D,
	 [
	  getSickFromAirContaminants(['<REDACTED>','<REDACTED>']),
	  computersFryOnDust,
	  ]).

costs(computersFryOnDust,onTheOrderOf(dollars(multiple(thousand)))).
costs(getSickFromAirContaminants(X),onTheOrderOf(dollars(multiple(thousand)))).
costs(qty(airFilterHAPF600D,2),dollars(30.19),
      website('http://www.amazon.com/Holmes-True-HEPA-Filter-HAPF600D-U2/dp/B000065DKE/ref=sr_1_1?ie=UTF8&qid=1424798316&sr=8-1&keywords=HAPF600D')).

requestsLoanToCover('<REDACTED>',qty(airFilterHAPF600D,2)).
requestsLoanToCover('<REDACTED>',dusterForComputers).
prevents(dusterForComputers,[computersFromFryingDueToDust]).

requestsLoanToCover('<REDACTED>',payBill(comcastInternet,[2016-03])).
desires('<REDACTED>',payBill(comcastInternet,[2016-03])).
costs(payBill(comcastInternet,Month),dollars(122.50)).
provides(payBill(comcastInternet),
	 [
	  website('freelifeplanner.org'),
	  website('frdcsa.org'),
	  website('frdcsa.org/frdcsa'),
	  website('frdcsa.org/~andrewdo'),
	  website('picform.org'),
	  website('.org'),	  
	  server('')
	 ]).

requestsLoanToCover('<REDACTED>',portableAirConditioner).
costs(portableAirConditioner,dollars(300)).
prevents(portableAirConditioner,
	 [
	  computerRoomOverheating,
	  houseGettingTooCold
	  ]).
causes(computerRoomOverheating,[computersOverheating,preventing(maintainingProductivity('<REDACTED>'))]).
causes(houseGettingTooCold,momBeingTooCold).

assumes('<REDACTED>',unconcernedAbout('<REDACTED>',[preventing(computersOverheating),preventing(maintainingProductivity('<REDACTED>'))])).

requestsLoanToCover('<REDACTED>',giftForFriend).
costs(giftForFriend,dollars(60)).

helps(prevents(giftForFriend,
	 [
	  sadnessOfFriend
	  ]
	      )).
	  
desires(Item) :-
	requestsLoanToCover(Person,Item).

%% (include links through the life planner).

%% 2x, new3dGlassesToReplaceThoseThatFailed. (luxuryItem)  http://www.newegg.com/Product/Product.aspx?Item=N82E16814998062, $80.99

desires(andrewDougherty,purchase(qty(cellPhoneBattery,2))).
desires(andrewDougherty,purchase(laptopBattery)).
desires(andrewDougherty,purchase(qty(hardDrive,N))).
desires(andrewDougherty,purchase(bluetoothHeadset)).
desires(andrewDougherty,purchase(g930Headset)).
desires(andrewDougherty,repayLoan('<REDACTED>','<REDACTED>',dollars(35))).
