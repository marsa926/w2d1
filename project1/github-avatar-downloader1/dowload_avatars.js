
var request = require('request');
var fs = require('fs');


console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "marsa926";
var GITHUB_TOKEN = "01dc079d65f0c0355b38bb4388e04ca227341553";

//Retrive the data from Contributors
function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers:{
      'User-Agent':'request'
    }
  };
  //when you request if the response is good, callback the data in JSON format
  request(options,function(error, response, body){
    if (!error && response.statusCode == 200){
      cb(JSON.parse(body));
    }
  });

}
//get the file/and save resulting image files to certain filePath
function downloadImageByURL(url, filePath) {
  request.get(url)
  .on('error',function(err){
    throw err;
  })
  .pipe(fs.createWriteStream(filePath));
}
//needs two arguments(repo owner/repo name) cannot process anything, will throw an error instead.
//with two arguments node should run the function getRepoContribute and download the image files.
var args = process.argv.slice(2);
console.log(args[0]);
console.log(args[1]);

if (args[0] === null || args[1] === null){
  console.log('Error, you must fill out repo owner/name.');
  } else {
    getRepoContributors(args[0], args[1], function(result) {
      for(i = 0; i < result.length; i++){
        downloadImageByURL(result[i].avatar_url, './images/' + result[i].id + ".jpg");
      }
    });
    }





