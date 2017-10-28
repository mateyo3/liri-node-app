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
} //end: movie if statement 



if (process.argv[2] === "do-what-it-says") {
	console.log("command input is: " + command);
} //end: do what I says if statement 




function twitter20(){
console.log(msg.SimpleMessage);
 
var params = {screen_name: 'ninja_cbc'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
}


function movie(){
	// Then run a request to the OMDB API with the movie specified
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
	console.log(queryUrl);

	request(queryUrl, function(error, response, body) {

	  // If the request is successful
	  if (!error && response.statusCode === 200) {

	    // Parse the body of the site and recover just the imdbRating
	    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
	    console.log("Release Year: " + JSON.parse(body).Year);
	  }
	});
}