var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printRiverse (html) {
var newStr = html.split("").reverse().join("");
 console.log(newStr);

}

getHTML(requestOptions, printRiverse);
