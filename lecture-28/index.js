const coding = ["js", "cpp", "java", "python", "c"];
const values = coding.forEach((item) => {
  console.log(item);
});

// const newNums = myNums.filter((num)=>{
// return num >4;
// })

const myNums = [1, 3, 4, 5, 6, 7, 76, 8, 98, 56, 43];
const newNums = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});
console.log(newNums);
