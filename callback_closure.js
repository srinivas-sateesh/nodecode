function logCar(logMsg, callback) {

  process.nextTick (function () {
   //console.log(logMsg);
    callback(logMsg);
  });
}
var cars= ["Ferrari", "Porsche", "Bugatti", "santro"];
 for(var idx in cars) {
    var message = "Saw a " + cars[idx];
 
   logCar(message, function () {
 
     console.log("Normal Callback:"+ message);
    });
 }
for (var idx in cars) {
  var message = "Saw a " + cars[idx];
 
  (function(msg) {
    logCar(msg, function () {
      console.log("Closure Callback:" + msg);
    });
  })(message);
}
