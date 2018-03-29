//Twitter
var Twitter = require("twitter");

client.get("favorites/list", function(error, tweet, response) {
  if (error) throw error;
  console.log(tweet);
  console.log(response);
});

//Search Params

var params = {
  q: "nodejs",
  count: 20,
  result_type: "recent",
  lang: "en",
};
//Spotify
var spotify = require("spotify");

spotify.search(
  { type: "artist OR album OR track", query: "My search query" },
  function(err, data) {
    if (err) {
      console.log("Error occured: " + err);
      return;
    }
  }
);

require("dotenv").config();
console.log(process.env);
