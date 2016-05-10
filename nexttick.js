var fs = require("fs");
fs.stat ("nexttick.js", function(err,stats) {

  if (err) {console.log(err);}
             });
  setImmediate(function() {
    console.log("Immediate Timer1 executed");
  });
  setImmediate(function() {
    console.log("Immediate Timer2 executed");
  });
  
  process.nextTick(function(){
  
    console.log("Next Tick1 executed");
   //console.log(1/0);
  });
  
  process.nextTick(function() {
    console.log("Next Tick2 executed");
  });
  
              
               