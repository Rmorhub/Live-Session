const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
    city: 'Kyiv',
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-32': {
    name: 'John',
    age: 57,
  },
};
// console.log(customers);

//bad option
// const getCustomersList = (obj) => {
//   // input:callback
//   // output:array

//   //input:array
//   //output:object

//   return Object.entries(obj)
//     .map((arr) => {
//       console.log(arr);

//       let obj = { id: arr[0] };

//       console.log(obj);

//       const value = arr[1];
//       obj = { ...obj, ...value };

//       console.log(obj);

//       return obj;
//     })
//     .sort((a, b) => a.age - b.age);
// };
// good option
// const getCustomersList = (obj) => {
//   // input:callback
//   // output:array

//   //input:array
//   //output:object

//   return Object.entries(obj)
//     .map(arr => ({ id: arr[0],...arr[1] }))
//     .sort((a, b) => a.age - b.age);
// };

// best option
const getCustomersList = (obj) => {
  // input:callback
  // output:array

  //input:array
  //output:object

  return Object.entries(obj)
    .map(([id,customerObj]) => ({ id, ...customerObj }))
    .sort((a, b) => a.age - b.age);
};

console.log(getCustomersList(customers));

// const getCustomersList = (obj) =>
//   Object.entries(obj)
//     .map(([id, user]) => ({
//       id,
//       ...user,
//     }))
//     .sort((a, b) => a.age - b.age);

// console.log(getCustomersList(customers));
// algo
// func getCustomersList
// input: obj
// output: sorted array

// get keys and values
// add each key as id to own values
// sort array
// return new array ( input obj must not be changed )
