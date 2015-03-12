
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var request = require('request');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.post('/', function(req, response) {
	console.log( req.body );

	slapper = req.body.user_name;
	slappee = req.body.text;

	action = [
              "slaps",
              "considers highlighting",
              "nudges",
              "whacks",
              "imprints",
              "whacks",
              "bangs",
              "spanks",
              "strikes",
              "clouts",
              "cuffs",
              "thwacks",
              "wallops", 
              "smites", 
              "boxes",
              "swipes", 
              "belts", 
              "larrups", 
              "socks", 
              "clobbers", 
              "slugs", 
              "forgets", 
              "pokes", 
              "steals", 
              "shreds",
              "urges", 
              "accidentally floods", 
              "deletes", 
              "drives over", 
              "makes",
              "rickrolls",
              "recites Vogon poetry for",
              "pushes", 
              "feeds",
              "pings"];

        superlative = [
              "a large and terrifyingly cute plush", 
              "a large", 
              "a small", 
              "a concrete",
              "a large and pointy", 
              "a large and fearsome", 
              "a cute little", 
              "a large, wet and smelly",
              "a large and heavy", 
              "a small and lightweight", 
              "a marble", 
              "a pink", 
              "a terrifyingly small and cute",
              "a tiny and bloodstained", 
              "a random", 
              "an enormous", 
              "a medium sized", 
              "a breath taking",
              "an extra large", 
              "a huge", 
              "a suspicious", 
              "a terrifying", 
              "a scary", 
              "a horrifying", 
              "an impervious",
              "a green", 
              "a blue", 
              "a red", 
              "a pink", 
              "a dirty", 
              "a brown", 
              "a silver", 
              "a golden", 
              "a black", 
              "a yellow",
              "a magenta", 
              "an translucent", 
              "a nontransparent", 
              "a mysterious", 
              "a puzzling", 
              "a perplexing",
              "a baffling", 
              "a mystifying", 
              "a confusing", 
              "a unfathomable", 
              "an incomprehensible", 
              "an unintelligible",
              "a Delphic", 
              "an impenetrable", 
              "an oblique", 
              "an enigmatic", 
              "a cryptic", 
              "a hazy", 
              "a foggy", 
              "a grimy",
              "a smeared", 
              "a muddied", 
              "a plain", 
              "a vague", 
              "an irrefutable", 
              "a palpale", 
              "a genuine", 
              "an authentic",
              "a real", 
              "a bona fide", 
              "a veritable", 
              "an attested", 
              "an honest-to-goodness", 
              "a kosher", 
              "a natural",
              "a stained", 
              "a broken", 
              "a dyed", 
              "a splattered", 
              "a blotched", 
              "a smudged", 
              "a blemished", 
              "a tainted",
              "a damaged", 
              "a colorful", 
              "a magnificient", 
              "an amazing", 
              "a sublime", 
              "a superb", 
              "a glorious",
              "a tremendous", 
              "a sensational", 
              "a gorgeous", 
              "a grand", 
              "a fabulous",
              "a bang tidy"
               ];

        object = [
               "kitty",
               "Nintendo Wii",
               "dolphin",
               "rainbow trout",
               "SystemSoftware 1.0",
               "Imperial-Class Stardestroyer",
               "macintosh",
               "baseball bat",
               "chessboard",
               "Ming Vase",
               "donkey",
               "Playstation 3",
               "shovel",
               "carefully selected range of random items",
               "stick",
               "the Windows 95 Bug list",
               "the Windows ME Bug list",
               "something",
               "goldfish",
               "sledgehammer",
               "trout",
               "cuttle fish",
               "something large and heavy from Dell",
               "something small and lightweight from Apple",
               "bust of Julius Caesar",
               "verse or two of Vogon poetry",
               "huge wad of belly button fluff",
               "fire and brimstone",
               "spoon",
               "cotton wool balls",
               "something pink",
               "mouse cord",
               "UNIX bible",
               "Back Street Boys CD",
               "mIRC 6.01",
               "brick",
               "christmas tree",
               "army shovel",
               "axe",
               "random number of Ninja Turtles",
               "crowbar",
               "knuckleduster",
               "book",
               "DVD",
               "VHS",
               "flower",
               "tree",
               "shelf",
               "laptop",
               "Macbook",
               "iBook",
               "PowerBook",
               "Macbook Pro",
               "Macbook Air",
               "Mac Mini",
               "Mac Pro",
               "iMac",
               "iPhone",
               "iPod",
               "cup",
               "IRC Client",
               "diamond",
               "lamp",
               "tapestry",
               "stone",
               "rock",
               "sheet of paper",
               "printer",
               "scanner",
               "mobile",
               "figurine",
               "magazine",
               "ball",
               "frog",
               "camel",
               "dragon",
               "walrus",
               "penguin",
               "giraffe",
               "lion",
               "shelf",
               "wardrobe",
               "lamp",
               "stone",
               "easter egg",
               "pot",
               "trophy",
               "goblet",
               "yellow snow",
               "WPiOS",
               "WPAndroid",
               "Spittle cough",
               "MattChat",
               "404 error",
               "Timbuktu bag",
               "fuck off bear",
               "ittybunny hug",
               "burrito",
               "HR violation",
               '"wut" look from Karen',
               "+t +d",
               "flash talk",
               "commit message",
               "#wendycorrect",
               "chav",
               "flash talk",
               "peterbutler's head",
               "REST API",
               "WPCLI",
               "Codex",
               "occurrence",
               ":cube:",
               ":coolio:",
               ":cough:",
               ":butler:",
               ":alx:",
               ":wut:",
               "wut?",
               "sudo make me a sandwich",
               "much wow",
               ""
               ];

        randomAction = action[ Math.floor( Math.random() * action.length ) ];
        randomSuperlative = superlative[ Math.floor( Math.random() * superlative.length ) ];
        randomObject = object[ Math.floor( Math.random() * object.length ) ];
        randomMessage = randomAction + ' %s ' + 'with ' + randomSuperlative + ' ' + randomObject;


		// 20% of the time, poor chris gets slapped instead
        if ( Math.random() < .05 && 'clauzon' != slappee ) {
          randomMessage = 'tries to slap %s but misses and hits clauzon with ' + randomSuperlative + ' ' + randomObject + ' instead!';
        }

		// Chris misses 20% of the time
        if ( Math.random() < .05 && slapper == 'clauzon' ){
          randomMessage = 'tries to slap %s, but is thwarted and gets slapped with ' + randomSuperlative + ' ' + randomObject + ' by alx instead!';
        }

	request.post({
	    url: process.env.WEBHOOKURL,
		body: '{"username":"slap-bot","text":"' + slapper + ' ' + sprintf( randomMessage, slappee ) +'", "icon_url":"https://cldup.com/zgSrDIti_U.png","channel":"' + req.body.channel_id + '","parse":"full"}',
	},
	function (error, postResponse, body) {
		console.log( body )
	});

	response.send( 'slap ' + req.body.text );

//  response.send( request.body );
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
