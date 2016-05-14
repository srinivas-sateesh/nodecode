var fs = require('fs');  
var fruitBowl = [' apple', 'orange', 'banana', 'grapes'];
function writeFruit( fg){ 
  if (fruitBowl.length){  
    var fruit = fruitBowl.pop() + " "; 
    fs.write( fg, fruit, null, null, function( err, bytes){ 
      if (err){ 
        console.log(" File Write Failed.");  } 
      else { 
        console.log(" Wrote: %s %dbytes", fruit, bytes);
            
        writeFruit( fg); 
           }  
    });  
  } 
  else {  fs.close( fg);  
       }  
}  
fs.open('../code/ fruit.txt', 'w', function( err, fe){ 
  //console.log(fe);
  writeFruit( fe);   
});
 
             
     
