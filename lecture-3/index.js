var a = 23;
console.log(a);
let c = 34;
console.log(c);
const b = 4;
console.log(b);

const accountId = 21232;
let accountEmail ="rohitrana@gmail.com";
var accountPassword ="12366";
//  this is not allowed because it is const already declare  accountId =232; 
console.log(accountEmail,accountId,accountPassword);
//prefer not to use var because it is not good
accountEmail = "rana@gmail.com";
accountPassword ="21666";
accountCity = "jaipur";
console.table([accountEmail,accountPassword,accountCity]);


// if you only declare variable not give value to it than it will give you undefiend; 
let accountName ;
console.log(accountName);