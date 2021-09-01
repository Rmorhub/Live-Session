// input-obj,obj
// output- boolean
// 1. compare if  number keys in obj1 !== number keys in obj2=>false
//2. collect keys to arr
// 3 iterate  in obj1  and compare keys:values obj1 with keys:values obj1
// 3.1 if (obj1[key] !== obj2[key]) return false

// // option bad
// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let index = 0; index < keys1.length; index += 1) {
//     const key = keys1[index];

//     const value1 = obj1[key];
//     const value2 = obj2[key];

//     if (value1 !== value2) {
//       return false;
//     }
//   }
//   return true;
// }

// good option
function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);

  if (keys1.length !== Object.keys(obj2).length) {
    return false;
  }

  return !keys1.some((key) => obj1[key] !== obj2[key]);

}

// function compareObjects(obj1, obj2) {
//   if (Object.entries(obj1).join() !== Object.entries(obj2).join()) {
//     return false;
//   }
//   return true;

//   //   let firstObj = Object.entries(obj1);
//   //   console.log(firstObj);
//   //   let secondObj = Object.entries(obj2);
//   //   firstObj = firstObj.join();
//   //   console.log(firstObj);
//   //   secondObj = secondObj.join();
//   //   console.log(secondObj);
//   //   if (firstObj !== secondObj) {
//   //     return false;
//   //   }
//   //   return true;
// }

// function compareObjects(obj1, obj2) {
//   // put your code here

//   let firstObj = Object.entries(obj1);
//   console.log(firstObj);
//   let secondObj = Object.entries(obj2);
//   firstObj = firstObj.join();
//   console.log(firstObj);
//   secondObj = secondObj.join();
//   console.log(secondObj);
//   if (firstObj !== secondObj) {
//     return false;
//   }
//   return true;
// }

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true



// const obj = {
//   name: 'Tom',
//   age: 17,
// };

//input: Object
//output:array

// const entries = Object.entries(obj)
// console.log(entries)