var http = require('http');
var options = {
  hostname: 'nitro-kings-landing-183325.nitrousapp.com',
  port: '8080'
};

function handleResponse(response) {
  var serverData = ' ';
  response.on('data', function(chunk) {
    serverData+= chunk;
  });
  response.on('end', function () {
    console.log("Response Status:", response.statusCode);
    console.log("Response Headers:", response.headers);
    console.log(serverData);
  });
}
function hi() {
  console.log("hi node...");
}

http.request(options, function(response) { 
  handleResponse(response);
}).end();

  