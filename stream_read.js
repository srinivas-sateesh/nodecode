var stream = require('stream'); 
var util = require('util'); 
util.inherits(Answers, stream.Readable); 
function Answers(opt) {  

  stream.Readable.call(this, opt); 
  this.quotes = ["Srini","yes","maybe", "no", "yep"];  
  this._index = 0;  

} 
Answers.prototype._read = function(){ 
  if (this._index > this.quotes.length){  
    this.push(null);  } 
  else 
  {  
   this.push(this.quotes[this._index]);  
   this._index += 1;  
  } 
};
var r = new Answers(); 
console.log(" Direct read: " + r.read()); 
r.on('data', function(data){  
  console.log(" Callback read: " + data); 
});  
r.on('end', function(){  console.log(" No more answers.");   
                            });

