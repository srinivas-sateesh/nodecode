var accountStr = '{"name":"Jedi", "members": ["Yoda", "Obi Wan"], "number": 1239, "location":"a galaxy far far away"}';
var accountStr2;
var accountObj = JSON.parse(accountStr);
console.log(accountObj.name);
console.log(accountObj.members);
console.log(accountObj.number);
console.log(accountObj.location);
console.log(JSON.stringify(accountObj));
