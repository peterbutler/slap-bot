
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
              "beautifies",
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
              "spills some coffee over", 
              "deletes", 
              "drives over", 
              "makes",
              "sends hordes of",
              "rickrolls",
              "recites Vogon poetry for" ,
              "pushes", 
              "beautifies",
              "feeds",
              "pings"];

        superlative = [
              "a fluffy concrete", 
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
              "a honest-to-goodness", 
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
               "Cthulhu's tentacles",
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
               "Khaled Mardam-Bey",
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
		body: '{"username":"slap-bot","text":"' + slapper + ' ' + sprintf( randomMessage, slappee ) +'", "icon_emoji":":wave:","channel":"' + req.body.channel_id + '","parse":"full"}',
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

function sprintf() {
  //  discuss at: http://phpjs.org/functions/sprintf/
  // original by: Ash Searle (http://hexmen.com/blog/)
  // improved by: Michael White (http://getsprink.com)
  // improved by: Jack
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Dj
  // improved by: Allidylls
  //    input by: Paulo Freitas
  //    input by: Brett Zamir (http://brett-zamir.me)
  //   example 1: sprintf("%01.2f", 123.1);
  //   returns 1: 123.10
  //   example 2: sprintf("[%10s]", 'monkey');
  //   returns 2: '[    monkey]'
  //   example 3: sprintf("[%'#10s]", 'monkey');
  //   returns 3: '[####monkey]'
  //   example 4: sprintf("%d", 123456789012345);
  //   returns 4: '123456789012345'
  //   example 5: sprintf('%-03s', 'E');
  //   returns 5: 'E00'

  var regex = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g;
  var a = arguments;
  var i = 0;
  var format = a[i++];

  // pad()
  var pad = function(str, len, chr, leftJustify) {
    if (!chr) {
      chr = ' ';
    }
    var padding = (str.length >= len) ? '' : new Array(1 + len - str.length >>> 0)
      .join(chr);
    return leftJustify ? str + padding : padding + str;
  };

  // justify()
  var justify = function(value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {
    var diff = minWidth - value.length;
    if (diff > 0) {
      if (leftJustify || !zeroPad) {
        value = pad(value, minWidth, customPadChar, leftJustify);
      } else {
        value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
      }
    }
    return value;
  };

  // formatBaseX()
  var formatBaseX = function(value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
    // Note: casts negative numbers to positive ones
    var number = value >>> 0;
    prefix = prefix && number && {
      '2': '0b',
      '8': '0',
      '16': '0x'
    }[base] || '';
    value = prefix + pad(number.toString(base), precision || 0, '0', false);
    return justify(value, prefix, leftJustify, minWidth, zeroPad);
  };

  // formatString()
  var formatString = function(value, leftJustify, minWidth, precision, zeroPad, customPadChar) {
    if (precision != null) {
      value = value.slice(0, precision);
    }
    return justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
  };

  // doFormat()
  var doFormat = function(substring, valueIndex, flags, minWidth, _, precision, type) {
    var number, prefix, method, textTransform, value;

    if (substring === '%%') {
      return '%';
    }

    // parse flags
    var leftJustify = false;
    var positivePrefix = '';
    var zeroPad = false;
    var prefixBaseX = false;
    var customPadChar = ' ';
    var flagsl = flags.length;
    for (var j = 0; flags && j < flagsl; j++) {
      switch (flags.charAt(j)) {
        case ' ':
          positivePrefix = ' ';
          break;
        case '+':
          positivePrefix = '+';
          break;
        case '-':
          leftJustify = true;
          break;
        case "'":
          customPadChar = flags.charAt(j + 1);
          break;
        case '0':
          zeroPad = true;
          customPadChar = '0';
          break;
        case '#':
          prefixBaseX = true;
          break;
      }
    }

    // parameters may be null, undefined, empty-string or real valued
    // we want to ignore null, undefined and empty-string values
    if (!minWidth) {
      minWidth = 0;
    } else if (minWidth === '*') {
      minWidth = +a[i++];
    } else if (minWidth.charAt(0) == '*') {
      minWidth = +a[minWidth.slice(1, -1)];
    } else {
      minWidth = +minWidth;
    }

    // Note: undocumented perl feature:
    if (minWidth < 0) {
      minWidth = -minWidth;
      leftJustify = true;
    }

    if (!isFinite(minWidth)) {
      throw new Error('sprintf: (minimum-)width must be finite');
    }

    if (!precision) {
      precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type === 'd') ? 0 : undefined;
    } else if (precision === '*') {
      precision = +a[i++];
    } else if (precision.charAt(0) == '*') {
      precision = +a[precision.slice(1, -1)];
    } else {
      precision = +precision;
    }

    // grab value using valueIndex if required?
    value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];

    switch (type) {
      case 's':
        return formatString(String(value), leftJustify, minWidth, precision, zeroPad, customPadChar);
      case 'c':
        return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
      case 'b':
        return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
      case 'o':
        return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
      case 'x':
        return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
      case 'X':
        return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad)
          .toUpperCase();
      case 'u':
        return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
      case 'i':
      case 'd':
        number = +value || 0;
        number = Math.round(number - number % 1); // Plain Math.round doesn't just truncate
        prefix = number < 0 ? '-' : positivePrefix;
        value = prefix + pad(String(Math.abs(number)), precision, '0', false);
        return justify(value, prefix, leftJustify, minWidth, zeroPad);
      case 'e':
      case 'E':
      case 'f': // Should handle locales (as per setlocale)
      case 'F':
      case 'g':
      case 'G':
        number = +value;
        prefix = number < 0 ? '-' : positivePrefix;
        method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
        textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
        value = prefix + Math.abs(number)[method](precision);
        return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
      default:
        return substring;
    }
  };

  return format.replace(regex, doFormat);
}

