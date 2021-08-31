// ===============================================================================

function compareObjects(obj1, obj2) {
  // put your code here

  let firstObj = Object.entries(obj1);
  console.log(firstObj);
  let secondObj = Object.entries(obj2);
  firstObj = firstObj.join();
  console.log(firstObj);
  secondObj = secondObj.join();
  console.log(secondObj);
  if (firstObj !== secondObj) {
    return false;
  }
  return true;
}

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

// function compareObjects(obj1, obj2) {
//   let firstObj = Object.entries(obj1);
//   console.log(firstObj);
//   let secondObj = Object.entries(obj2);
//   firstObj = firstObj.join();
//   console.log(firstObj);
//   secondObj = secondObj.join();
//   if (firstObj !== secondObj) {
//     return false;
//   }
//   return true;
// }
