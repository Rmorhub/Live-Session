// algo
// 1. create empty array ++++
// 2. iterate arr ++++
// 3. apply callback for every el
// 4. push el to the res if callback true

// input: array , func
// output: array

// callback
// input: element, index, array
// boolean

// option 1
// const filterArrayElements = (arr, callback) => {
//   const res = [];

//   for (let index = 0; index < arr.length; index += 1) {
//     const callbackRes = callback(arr[index], index, array);
//     if (callbackRes) {
//       res.push(arr[index]);
//     }
//   }
//   return res;
// };

const filterArrayElements = (arr, callback) => {
  const res = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index], index, arr)) {
      res.push(arr[index]);
    }
  }
  return res;
};

// test data
// const array = [10, 5, 4, 6, 9];

// 1
// const func = (el) => el > 7;
// const func = (el, index, arr) => {
//   console.log(`el: ${el}, index: ${index}, arr: ${arr}`);
//   if (el > 7) {
//     return true;
//   } else {
//     return false;
//   }
// };

// 2

const array = [10, 5, 4, 99, 10, 22, 6, 111, 222];
const func = (el, index, arr) => {
  if (arr.length < 5) {
    return true;
  }
  return el > 7;
};

console.log(filterArrayElements(array, func));
