// algo
// 1. create empty array +++
// 2. iterate arr +++
// 3. apply callback for every el  +++

//input arr, callback
//ouput: new array

//callback
//input: number, index (optional) , array (optional)
//output: number

// const mapArrayElements = (arr, callback) => {
//   let result = [];

//   for (let index = 0; index < arr.length; index += 1) {
//     const res = callback(arr[index], index, arr);
//     if (callback) {
//       result.push(res);
//     }
//   }

//   return result;
// };

// const array = [10, 5, 4, 99, 10, 22, 6, 111, 222];
// const callbackFunc = (arrElement, index, entireArr) => {
//   return arrElement * arrElement;
// };

// console.log(mapArrayElements(array, callbackFunc));



const mapArrayElements = (arr, callback) => {
  let result = [];

  for (let index = 0; index < arr.length; index += 1) {
    const res = callback(arr[index], index, arr);
    if (callback) {
      result.push(res);
    }
  }

  return result;
};

const array = [10, 5, 4, 99, 10, 22, 6, 111, 222];
const callbackFunc = (arrElement, index, entireArr) => {
  return arrElement * arrElement;
};

console.log(mapArrayElements(array, callbackFunc));
