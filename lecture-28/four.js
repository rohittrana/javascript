const array1 =[100 , 200, 300,400,500];


const myTotal = array1.reduce(function (acc,curr){
               return acc+curr
},0);
console.log(myTotal);