var request = require('request');
var fs = require('fs');

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
  if (!error && response.statusCode == 200){

  cb(JSON.parse(body));
  }
});

}

function downloadImageByURL(url, filePath) {
  request.get(url)
  .on('error',function(err){
    throw err;
  })
  .pipe(fs.createWriteStream(filePath));
}



getRepoContributors("jquery", "jquery", function(result) {
  for(i = 0; i < result.length; i++){
    // console.log(result[i].avatar_url);
    downloadImageByURL(result[i].avatar_url, './images/' + result[i].id + ".jpg");
  }


  // console.log("Result:", result);

});

// downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "./kvirani.jpg")
