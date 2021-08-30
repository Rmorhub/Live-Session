/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

// Input: obj,key,value
// Ouput: obj

// 1
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// input: obj
//output: coppied obj
//input: target (object) , source (object),  ..... source N (Object)
function addPropertyV2(obj, key, value) {
  Object.assign(obj, { [key]: value });
  return obj;
}

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

// examples
const transaction = {
  value: 170,
};

console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(transaction);

console.log(addPropertyV2(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(transaction);

console.log(addPropertyV4(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(transaction);

console.log(addPropertyV4(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(transaction);

// const numbers = [10, 11, 18, 7, 0];
// console.log(numbers);
// console.log(...numbers);

// rest operator
// function sum(param1, ...params) {
//   console.log(param1);
//   console.log(params);
//   return params.reduce((acc, el) => {
//     acc += el;
//     return acc;
//   });
// }

// // test data

// console.log(sum(1, 2, 55, 9, 0));

// const numbersRest = [10, 11, 18, 7, 0];
// const [firstElement, ...restArr] = numbersRest; /// rest
// const numbersRestCoppied = [...numbersRest]; /// spread

// console.log(firstElement);
// console.log(firstElement);
