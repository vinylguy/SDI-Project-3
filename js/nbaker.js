/*
Nathan Baker
04/16/2012
Deliverable 3
Space Exploration "Theme"
*/

//Global Variables
var say = function(message) { console.log(message); };
var coreInventory = 300,
	crewInventory = 500,
    starSystems = [ "Alpha Centauri", "Delta 5", "Gamma Star 7", "Klandathu" ];

//Object for captain
var captain = {
	realName: "Buzz Lightspeed",
	rank: "Fleet Captain",
	rebel: false,
	warpTo: function (destination) {},
	getPosition: function () {}
};

say( "Welcome Captain " + captain.realName);
say( "We are accessing the database for a list of qualified officers." );
say("Captain, You have:" + json.officers.length + " Officers available");

var listOfficers = function (json) {
	for (var i = 0; i < json.officers.length; i++) {
		var officer = json.officers[i];
		say("Rank: " + officer.rank + ", Name: " + officer.name + ", Age: " + officer.age);
	};
};

listOfficers(json);

say("Captain, You have:" + json2.ships.length + " Ships at your disposal");

var listShips = function (json2) {
	for (var i = 0; i < json2.ships.length; i++) {
		var ship = json2.ships[i];
		say("Name: " + ship.name + ", Class: " + ship.class + ", Cores: " + ship.cores + ", Crew: " + ship.crew);
	};
};

listShips(json2);

say( "There are currently:" + starSystems.length + " Previously explored star systems" );

for (var i=0, j=starSystems.length; i < j; i++) {
	say( starSystems[i] );
};



say("Captain, in order to depart we need the required Crewmen and Warp cores.");

//Boolean comparison
var isReady = function(cores, crew) {
	if (cores>=185 && crew>=435) {
	var ready = "There are " + cores + " reactor cores available, and there are " + crew + " crew members available." + " We are cleared for departure";
	return ready
	}; 
		if (cores<185 || crew<435);
		{
		var notReady = "Sir we have in-sufficient resources for our mission."
		return notReady
	};
};

var ready = isReady(coreInventory, crewInventory);
say(ready || notReady);

//While loop, for exploring planets. 

captain.warpTo();

var planets = 13;
while (planets > 0) {
	say( "Looking for rebel presence on planet #" + planets );
	planets--;
};

