var fs = require('fs');
var veggieTray = ['carrots', 'celery', 'olives'];
fd=fs.openSync('../code/veggie.txt', 'w');
while(veggieTray.length) {
  veggie = veggieTray.pop() + " " ;
  var bytes = fs.writeSync(fd, veggie, null, null);
  console.log("Wrote %s %d bytes", veggie, bytes);
              }
fs.closeSync(fd);
          
