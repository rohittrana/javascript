// arrrow function

const user= {
               username :"rohit",
               price:598,
               welcomeMessage:function(){
                              console.log(`${this.username},welcome to website `)
               }
}


// current contex
user.welcomeMessage();
user.username ="sam"
user.welcomeMessage()

const two =()=>{
               let usernmae="rohit"
               console.log(this);
}
two();
function username(){
               name="rohitrana";
               console.log(this.name);
}
const usernametwo = ()=>{
               usernmae ="rohit rana";
               console.log(this.username);
}
const addTwo =(num1,num2)=> num1+num2;
console.log(addTwo(23,43));
username();

// explit and inexplit

