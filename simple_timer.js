function simpleTimeOut(consoleTimer) {
  //console.log("srini");
  console.timeEnd(consoleTimer);
}
console.time("two second");
setTimeout(simpleTimeOut, 2000, "two second");

console.time("one second");
setTimeout(simpleTimeOut, 1000, "one second");

console.time("50 ms");
setTimeout(simpleTimeOut,50, "50 ms");


