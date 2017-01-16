
var https = require('https');

module.exports = function getHTML(options, callback) {
https.get(options,function(response){
  var buf = "";
    response.setEncoding('utf8');

    response.on('data', function (data){
      buf += data.toString();
      console.log('Chunk Received. Length:', data.length);
    });

      response.on('end', function() {
      console.log('Response stream complete.');
      console.log(buf);
    });
 });
};



