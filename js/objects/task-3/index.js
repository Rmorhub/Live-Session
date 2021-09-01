// ===============================================================================
// to do
// написать ф-цию compareObject
// Input: obj,obj 2 объекта
// output: boolean

// true если объекты равны (одинаковые ключи и одинаковые значение ключей)
// false если объекты не равны

function compareObjects(obj1, obj2) {
  if (Object.entries(obj1).join() !== Object.entries(obj2).join()) {
    return false;
  }
  return true;

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
}

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