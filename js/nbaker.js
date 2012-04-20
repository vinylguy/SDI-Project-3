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
	warpTo: function (destination) {
		say("Captain we are traveling to our destination " + starSystems[4]);
	},
	getPosition: function () {
		say("Sir we have arrived at our destination");
	}
};

//Procedure
var readyToDepart = function() {
	if (true) { say("Ready to depart Captain, " + captain.realName ); 
	}else{
		say("Captain, " + captain.realName + " we are unable to depart.");
		};
};

say( "Welcome Captain " + captain.realName);
say( "We are accessing the database for a list of qualified officers." );
say("Captain, You have:" + json.officers.length + " Officers available");

//For loop, using JSON array 1
var listOfficers = function (json) {
	for (var i = 0; i < json.officers.length; i++) {
		var officer = json.officers[i];
		say("Rank: " + officer.rank + ", Name: " + officer.name + ", Age: " + officer.age);
	};
};

listOfficers(json);

say("Captain, You have:" + json2.ships.length + " Ships at your disposal");

//For loop, using JSON array 2
var listShips = function (json2) {
	for (var i = 0; i < json2.ships.length; i++) {
		var ship = json2.ships[i];
		say("Name: " + ship.name + ", Class: " + ship.class + ", Cores: " + ship.cores + ", Crew: " + ship.crew);
	};
};

listShips(json2);

//For loop over local array
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

readyToDepart(true); 

//Mutator Method
starSystems.push("Karibe 6")

say("Captain we have discovered a new star system!" + " We have named it: " + starSystems[4] + " This star system has 13 planets to explore");

//Accessor Methods
captain.warpTo(starSystems[4]);

captain.getPosition(starSystems[4]);

say("Captain we are begining our scan for rebels");

//While loop, for exploring planets.
var planets = 13;
while (planets > 0) {
	say( "Looking for rebel presence on planet #" + planets );
	planets--;
};

say("Captain it looks like there is no rebel presence in this star system");

say("Captain's LOG:" + starSystems[4] + " Has been explored and logged.");