/*
Nathan Baker
04/16/2012
Deliverable 3
Space Exploration "Theme"
*/

//Global Variables
var say = function(message) { console.log(message); };


//Object for captain
var captain = {
	realName: "Buzz Lightspeed",
	rank: "Fleet Captain",
	rebel: false,
	warpTo: function (destination) {},
	getPosition: function () {}
};

say( "Welcome Captain " + captain.realName);

say("Captain, You have:" + json.officers.length + " Officers ready to fly ships.");

var listOfficers = function (json) {
	for (var i =0; i < json.officers.length; i++) {
		var officer = json.officers[i];
		say("Rank: " + officer.rank + ", Name: " + officer.name + ", Age: " + officer.age);
	};
};

listOfficers(json);

say("Captain, You have:" + json2.ships.length + " Ships at your disposal");

var listShips = function (json2) {
	for (var i =0; i < json2.ships.length; i++) {
		var ship = json2.ships[i];
		say("Name: " + ship.name + ", Class: " + ship.class + ", Cores: " + ship.cores);
	};
};

listShips(json2);