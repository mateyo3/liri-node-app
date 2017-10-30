// console.log(process.argv);

var twitter = require("twitter");
var spotify = require("node-spotify-api");
var request = require("request");

request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
});




var command = process.argv[2];

//Liri commands
if (process.argv[2] === "my-tweets") {
	var keys = require('./keys.js');
	console.log("command input is: " + command);
	// twitter20();
} //end: twitter if statement 



if (process.argv[2] === "spotify-this-song") {
	console.log("command input is: " + command);
	
	var nodeArgs = process.argv;
	var songName = "";
	for (var i = 2; i < nodeArgs.length; i++) {
	  if (i > 2 && i < nodeArgs.length) {
	    songName = songName + "+" + nodeArgs[i];
	  }
	  else {
	    songName += nodeArgs[i];
	  }
	}
} //end: spotify if statement 



if (process.argv[2] === "movie-this") {
	console.log("command input is: " + command);

	var nodeArgs = process.argv;
	var movieName = "";

	for (var i = 3; i < nodeArgs.length; i++) {
	  if (i > 3 && i < nodeArgs.length) {
	    movieName = movieName + "+" + nodeArgs[i];
	  }
	  else {
	    movieName += nodeArgs[i];
	  }
	}

	movie();

	// if (nodeArgs[3] = "NULL") {
	// 	mrNobody();
	// }
} //end: movie if statement 



if (process.argv[2] === "do-what-it-says") {
	console.log("command input is: " + command);

	var nodeArgs = process.argv;
	var whatItSaysName = "";

	for (var i = 3; i < nodeArgs.length; i++) {
	  if (i > 3 && i < nodeArgs.length) {
	    whatItSaysName = whatItSaysName + "+" + nodeArgs[i];
	  }
	  else {
	    whatItSaysName += nodeArgs[i];
	  }
	}

//PSUEDO CODE:
// Take the text inside of random.txt and then use it to call one of LIRI's commands.


} //end: do what I says if statement 




function twitter20(){
console.log(msg.SimpleMessage);
 
var params = {screen_name: 'ninja_cbc'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

//PSUEDO CODE:
// find specific user's 20 recent tweets
// Output data to console

}


function movie(){
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
	// console.log(queryUrl);

	request(queryUrl, function(error, response, body) {

	  // If the request is successful
	  if (!error && response.statusCode === 200) {

	    console.log(
			"Title: " + JSON.parse(body).Year + 
			"\nRelease Year: " + JSON.parse(body).Released + 
			"\nIMDB Rating: " + JSON.parse(body).imdbRating + 
			"\nRotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + 
			"\nCountry: " + JSON.parse(body).Country + 
			"\nLanguage: " + JSON.parse(body).Language + 
			"\nPlot: " + JSON.parse(body).Plot + 
			"\nActors: " + JSON.parse(body).Actors 
	    	);
	  } else {
	  	console.log()
	  }
	});
}

function mrNobody() {
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
	movieName = "Mr.+Nobody";
	console.log(queryUrl);

	request(queryUrl, function(error, response, body) {

	  // If the request is successful
	  if (!error && response.statusCode === 200) {

	    console.log(
			"Title: " + JSON.parse(body).Year + 
			"\nRelease Year: " + JSON.parse(body).Released + 
			"\nIMDB Rating: " + JSON.parse(body).imdbRating + 
			"\nRotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + 
			"\nCountry: " + JSON.parse(body).Country + 
			"\nLanguage: " + JSON.parse(body).Language + 
			"\nPlot: " + JSON.parse(body).Plot + 
			"\nActors: " + JSON.parse(body).Actors 
	    	);
	  } else {
	  	console.log()
	  }
	});
}