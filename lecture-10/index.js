//  string in javascript
const name = "rohit";
const repoCount = 59;
console.log(name +repoCount +"value");
// this syntax is not good 
// we will use backtick rather than using this 

console.log(`${name } and repo count is ${repoCount}`);



const gameName = new String("rohit rana");

console.log(gameName);
console.log(typeof(gameName));
console.log(gameName.toLocaleUpperCase());
console.log(gameName.bold());

console.log(gameName.length);
console.log(gameName.trimStart());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName.slice());
console.log(gameName.split());
console.log(gameName.slice(0,5));

const newStringOne = '          rohit rana   ';
console.log(newStringOne);

console.log(newStringOne.trim());
console.log(newStringOne.replace('rohit','mohit'));

console.log(newStringOne.includes('rohit'));
console.log(newStringOne.includes('sundar'));