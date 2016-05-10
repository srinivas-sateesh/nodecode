var x=y=z=0;
function displayValues() {
  console.log("X=%d; Y=%d; Z=%d", x,y,z);
}
function updateX() {
  x+=1;
  displayValues();
}
function updateY(){
  y+=1;
  displayValues();
}
function updateZ(){
  z+=1;
  displayValues();
}
setInterval(updateZ, 2000);
setInterval(updateX,500);
setInterval(updateY,1000);


