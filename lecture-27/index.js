// for of 

const arr = [1,2,4,5,6];
const state =["himachal pradesh","punjab ","jammu","bihar"];
for(const num of arr ){
        console.log(num);
}

for(const sta of state){
               console.log(sta);
}
const greeting = "hello world!";
for(const greet of greeting){
               console.log(`Each char is ${greet}`);
}


const map = new Map()
map.set('IN',"INDIA");
map.set('USA',"United States of America");
map.set('AUS',"AUSTRILIA");

for(const [key ,value ]of map){
               console.log(key,":-" ,value );
}


// this cod is not working  
// const myObject ={
//                'game':"NFS",
//                'game2':'spiderman'
// }
// for( const [key,value] of myObject){
//                console.log(key,":-" ,value );
// }


