var request = require('request');
var fs = require('fs');

request('https://sytantris.github.io/http-examples/future.jpg', function(err, response, body) {
  if (err) throw err;

  //console.log('Response Status Code:', body);
}).on('response', function(res){
  console.log('Response Status Code:', res.statusMessage);
  console.log(res.headers['content-type']);
  console.log('Downloading image...');
}).on('error', function(e){
  console.log('Encountered the following error: ' + e);
}).pipe(fs.createWriteStream('future.jpg')).on('finish', function(done) {
  console.log('Download complete.');
});
