//array 02

 const marvel_hero = ["thor ","ironman","spiderman"]
 const dc = ["superman","flash","batman"];
//  console.log(marvel_hero.push(dc));
//  console.log(marvel_hero);
//  console.log(marvel_hero.concat(dc));

 const all_new_heros = [...marvel_hero,...dc];
console.log(all_new_heros);
console.log(typeof(all_new_heros));

//slag operator we use to join the array

const another_array =[12,43,4 ,[4,34,43,4],[43.554,56,7,76]]
const real_anotherArray = another_array.flat(Infinity);
console.log(real_anotherArray);

let name = "Rohit Rana";
console.log(Array.from("Rohit Rana"));
console.log(Array.from({name:"Rohit Rana"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));