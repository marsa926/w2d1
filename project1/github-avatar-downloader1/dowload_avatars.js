var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "marsa926";
var GITHUB_TOKEN = "01dc079d65f0c0355b38bb4388e04ca227341553";

function getRepoContributors(repoOwner, repoName, cb) {

}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});