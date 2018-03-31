//BankJS, ReadFile, OMDB_Request, Arguments
require('dotenv').config();

var keys = require('./keys.js');
var request = require('request');
var Twitter = require('twitter');
var spotify = require('spotify');
var fs = require('fs');

var action = process.argv[2];
var parameters = process.argv[3];

function switchCase() {
    switch (action) {
        case 'my-tweets':
        getTweets();
        break;

        case 'spotify-this-song':
        getSong();
        break;

        case 'movie-this':
        getMovie();
        break;

        case 'do-what-it-says':
        getReadMe();
        break;

        default:
        console.log("something broke");
        break;
    }
};


//Twitter
function getTweets(){
    console.log("Latest Tweets!");
var client = new Twitter(keys.twitter);
};
//Search Params
var params = {
  q: 'nodejs',
  screen_name: 'GitMusic2018',
  count: 20,
  result_type: 'recent',
  lang: 'en'
};
client.get('statuses/user_timeline', params, function(error, tweet, response) {
  if (!error){
      for(i = 0; i < tweets.length; i++){
          var tweetData = ('Number: ' + (i + 1) + '\n' + tweets[i].created_at + '\n' + tweets[i].text + '\n');
          console.log(tweetData);
      }

  }
  
});


//Spotify
function getSong() {
    console.log("Spotify!");
var spotify = new Spotify(keys.spotify);
};
spotify.search(
  { type: 'artist OR album OR track', query: 'My search query' },
  function(err, data) {
    if (err) {
      console.log('Error occured: ' + err);
      return;
    }else {
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song: " + data.tracks.items[0].album.name);
        console.log("Album: " + data.tracks.items[0].album.name);
        console.log("Preview: " + data.tracks.items[3].preview_url);
    }
  }
);

//OMDB
function getMovie() {
    console.log("Let's go to the Movies!");
    if (parameter === undefinded) {
        findMovie = "Mr. Noboby";
    }else {
        findMovie = parameter;
    };

    var queryUrl = "http://www.omdbapi.com/?i=" + findMovie + "tt3896198&apikey=8cb876c3";
    console.log(queryUrl);
request(queryUrl, function(err, res, body){

    if (!error && res.statusCode === 200) {
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("Country: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
    }
});

//Readme and random.txt
function getReadMe() {
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
            return console.log(err);
        }
        //console.log(data);

        var output = data.split().splice(",");

        for (var i = 0; i < output.length; i++) {
            console.log(output[i]);
        }
    });
}

