var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "marsa926";
var GITHUB_TOKEN = "01dc079d65f0c0355b38bb4388e04ca227341553";

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers:{
      'User-Agent':'request'
    }
  };
  request(options,function(error, response, body){
  if (!error && response.statusCode ==200){

  cb(JSON.parse(body));
  }
});

}





getRepoContributors("jquery", "jquery", function(result) {
  console.log("Result:", result);
});


