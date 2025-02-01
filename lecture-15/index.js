// object
// singleton

const mySym = Symbol("key1")

const jsuser = {
               name:"rohit",
               age:23,
               city:"Ludhiana",
               [mySym]:"rohit Rana",
               state:"punjab",
               isLoggedIn:true,
               email:"rohitrana2429@gmail.com"
}

// console.log(jsuser);

// console.log(jsuser.email);
// console.log(jsuser["emial"]);
// console.log(jsuser["name"]);
// console.log(jsuser["city"]);
// console.log(jsuser[mySym]);

// jsuser.email="RohitAnikat@gmail.com";
// console.log(jsuser.email);
// Object.freeze(jsuser);
// console.log(jsuser);


jsuser.greeting  = function()
{
               //string interpolation we are using here
               console.log(`hey my name is ${this.name}`);
}
console.log(jsuser.greeting());