// data and time 

const date = new Date();
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toTimeString());
console.log(date.toJSON());
console.log(date.toUTCString());


console.log(typeof date);

let myCreateDate = new Date(2025,0,28);
console.log(myCreateDate.toDateString());

// timeStamp

// let myTimeStamp = Date.now()
// console.log(myTimeStamp.getTime());

// console.log(myCreateDate.getTime());


console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());