var http = require('http');
var options = {
  hostname: 'nitro-kings-landing-183325.nitrousapp.com', 
  port: '8080',
  path: '/hello.html'
};
function handleResponse(response) {
  var serverData = ' ';
  response.on('data', function (chunk) {
    
    serverData+= chunk;
  });
  response.on('end', function () {
   // console.log("hi");
    console.log(serverData);
  });
}
http.request(options, function (response) {
  handleResponse(response);
}).end();
