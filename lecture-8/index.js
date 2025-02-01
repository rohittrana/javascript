// primitive and non -primitive
//call by value 

//  7 : string number boolean  null undefined symbol  BigInt
const score = 100;
const scoreValue =100.34;
const isLoggedIn =false;
const outsideTemp = null 
let userEmail ;

const id = Symbol('rohit')
const anotherid = Symbol(2343);
console.log(id);
console.log(anotherid);
console.log(typeof(id));
console.log(typeof(anotherid));

const BigInt = 343848939490390334903n;
console.log(BigInt);
// Reference type (Non primitive )
//array , Objects , Function 

console.log(typeof(BigInt))
console.log("hello");
const hero = ['shaktiman','naagraj','doga']
console.log(hero);
const  myObj ={
               name :'rohit',
               age :'23'
}
console.log(myObj);
const myFunction = function (){
               console.log("this is my first function ");
}
console.log(typeof(hero));
console.log(typeof(myObj));
console.log(typeof(myFunction));
// javascirpt is dynamic type 


