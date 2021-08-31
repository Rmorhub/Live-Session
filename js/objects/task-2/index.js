// func
// input: arr[strings], arr[strings]
// output: obj

// input: array, keys, values
// output: obj

// algo
// reduce

//algo
// create res obj
// iterate keyList
// get value by index
// add key-value to the object

// option 1 bad
// function buildObject(keysList, valuesList) {
//   const obj = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     const key = keysList[index];
//     const value = valuesList[index];
//     Object.assign(obj, { [key]: value });
//     // obj[keysList[index]] = valuesList[index];
//   }
//   return obj;
// }

// option 2 bad
// function buildObject(keysList, valuesList) {
//   let obj = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     obj =  {...obj,  [keysList[index]]: valuesList[index] };
//   }
//   return obj;
// }

// option good 1
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((obj, key, index) => {
//     return { ...obj, [key]: valuesList[index] };
//   }, {});
// }

// option good 2
const buildObject = (keysList, valuesList) =>
  keysList.reduce(
    (obj, key, index) => ({ ...obj, [key]: valuesList[index] }),
    {}
  );

// ==========================================

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
console.log(result);