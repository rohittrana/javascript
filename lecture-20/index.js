// scope 


// let a = 10 
// const b =20
// var c = 30
// console.log(a);
// console.log(b);
// console.log(c);

if(true){
               let a =10;
               const b =20;
               var c = 30;
}
// console.log(a);
// console.log(b);
console.log(c);

//closure

function one(){
               const username="rohit"
               function two(){
                              const website ="youtube";
                              console.log(this.username);
               }
               // console.log(website);
               two();
}


one();

function addone(num){
            return num+1;
}

const addTwo= function (num){
               return num+2;
}
addTwo(4);
console.log(addTwo(34));
addone(34);