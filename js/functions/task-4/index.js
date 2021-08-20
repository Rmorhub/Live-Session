const numbersList = [5, 0, 8, 10, -4, 50, 220];
//input func, obj(optional)
//ouput: new array

//callback
//input: number, index (optional) , array (optional)
//output: number
console.log('numberList before ' + numbersList);

// option 1
// const mapRes = numbersList.map(function (el, index, array) {
//   return el * el;
// });

// option 2
const mapRes = numbersList.map((el) => el * el);

console.log(mapRes);

console.log('numberList after ' + numbersList);

// ======= FOREACH

// input: callback, obj (optional)
// output: undefined

//callback
// input: number, index (optional) , array (optional)
// output: undefined
console.log('numberList before foreach ' + numbersList);

const forEachRes = numbersList.forEach((el) => {
  if (el > 0) {
    console.log(el);
  }
});

console.log(forEachRes);

console.log('numberList after foreach ' + numbersList);

// ====== FIND
//input: number, index (optional) , array (optional)
//output: number

// callback
//input: number, index (optional) , array (optional)
//output: boolean

// option 1
// const findRes = numbersList.find((el) => {
//   if (el % 2 === 0 && el > 0) {
//     return true;
//   }
//   return false;
// });

// option 2
const findRes = numbersList.find((el) => el % 2 === 0 && el > 0);

console.log(findRes);

// ====== REDUCE

const transactions = [5, 11, 8, 10, -4, 50, 220, 1203, 556, 41];

//input: number, index (optional) , array (optional)
//output: number

// callback
//input: acc (number), number,  index (optional) , array (optional)
//output: number

const reduceRes = transactions.reduce((acc, el, index) => {
  console.log('step ' + index + ' acc is: '+ acc + ', element is : '+ el);
  acc += el;
  return acc;
});

console.log(reduceRes)