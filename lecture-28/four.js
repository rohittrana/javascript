const array1 = [100, 200, 300, 400, 500];

const myTotal = array1.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(myTotal);

const obj = [
  {
    Item: "js cours",
    price: 200,
  },
  {
    Item: "js cours",
    price: 400,
  },
  {
    Item: "js cours",
    price: 1000,
  },
  {
    Item: "js cours",
    price: 400,
  },
];

 const totalprice =obj.reduce((acc,item)=>item.price+acc,0);
console.log(totalprice);