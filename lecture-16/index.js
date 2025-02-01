// object 2

const tinderUser = new Object();
// console.log(tinderUser);

//singleton
tinderUser.username ="rohitrana";
tinderUser.id =2324;
tinderUser.email = "rohitrana@gmail.com"

// console.log(tinderUser);

const regularUser={
               email:"rohitrana@gmail.com",
               fullname:{
                              userfullname:{
                                             firstname:"rohit",
                                             lastname:"rana"
                              }
               }
}

// console.log(regularUser.fullname?.userfullname);

const obj1 ={1:"a",2:"b"}
const obj2 = {3:"c",4:"d"};
// const obj3= {obj1,obj2};
// console.log(obj3);

const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);

const obj4 = {...obj1,...obj2};
console.log(obj4);

