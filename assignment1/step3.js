var https = require('https');
function getAndPrintHTML (options) {


 https.get(requestOptions,function(response){
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


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML();