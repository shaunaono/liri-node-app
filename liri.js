//Twitter
var Twitter = require("twitter");

client.post("statuses/update", { status: "" }, function(
  error,
  tweet,
  response
) {
  if (error) throw error;
  console.log(tweet);
  console.log(response);
});

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
