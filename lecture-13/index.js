//Array


const myArr =[1,2,43,4,56];
console.log(myArr[2]);
myArr.push(43)
myArr.push(45);
myArr.pop();
console.log(myArr);
myArr.unshift(8);


console.log(myArr.includes(9));
console.log(myArr.indexOf(2));
console.log(myArr.indexOf(3));
const newArray = myArr.join();
// zero base indexing
//shallow copy of an object is copy whose properties share the same reference point to the same underfying values as those 

//slice ,splice
console.log("A",myArr);
const myn1 = myArr.slice(1,3);

//deep copy  do not share the orginal copy

const myHero = ["shaktiman","naagraj","dooba"];
console.log(myHero);



// console.log(myArr[0]); 
// const myNumber =[1,2,34,5,6,56,[34.34,654.65,34.656],[34.54,45.5]];
