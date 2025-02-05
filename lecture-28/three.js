const myNumbers = [1,2,3,4,5,6,7,8,9,10,11,12];

// const newNum =myNumbers.map((num)=> num+10)
// console.log(newNum);

const newNums = myNumbers.map((nums)=> nums*10).map((num)=>num+13).filter((nums)=>nums>60);
console.log(newNums);

