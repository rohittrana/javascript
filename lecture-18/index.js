// Function parameter

function add (a,b){
               return a+b;

}
function sub(a,b){
               return (a-b);
}
console.log(sub(3,5));
console.log(add(23,43));


function isLogUserMessage(username ="sam"){
               if(!username)
               {
                              console.log("please enter a username");
               }
               return `${username} just logged in`
}
// console.log(isLogUserMessage('rohit'));

console.log(isLogUserMessage())