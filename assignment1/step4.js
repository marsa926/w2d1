var https = require('https');

function getHTML (options, callback) {

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
}
function printHTML (html) {
    console.log(html);
}




var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions,printHTML);