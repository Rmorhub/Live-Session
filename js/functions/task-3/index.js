/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */

/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достань последний элемент массива numbersList1 и помести его в переменную lastNumber
// выведи в консоль эту переменную, а так же массив numbersList1 после выполнения pop

//input: none
//output: number
const numbersList1 = [1, 2, 3, 4, 5];

console.log(numbersList1);

const res = numbersList1.pop();

console.log(res);

console.log(numbersList1);

// put your code here

/* push - добавит элемент в конец массива */

// c помощью метода push добавь число 6 в конец массива numbersList2
// выведи в консоль результат работы метода push, а так же массив numbersList2 после выполнения push

const numbersList2 = [1, 2, 3, 4, 5];
console.log('before push ', numbersList2);

const resPush = numbersList2.push(2);
console.log(resPush);

console.log('after push ', numbersList2);

// put your code here

/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достань первый элемент массива numbersList3 и помести его в переменную firstNumber
// выведи в консоль эту переменную, а так же массив numbersList2 после выполнения shift

const numbersList3 = [1, 2, 3, 4, 5];

// input: none;
// output: number;
console.log('before shift ', numbersList3);

const resShift = numbersList3.shift();

console.log(resShift);
console.log('after shift ', numbersList3);
// put your code here

/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавь число 0 в начало массива
// выведи в консоль результат работы метода unshift, а так же массив numbersList4 после выполнения unshift

const numbersList4 = [1, 2, 3, 4, 5];

// put your code here

/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */

// начальный массив
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

console.log('before filter ', anotherNumbersList);

//input: callback
//output: array


/// callback
//input: num
//output: boolean

// function filterCallback(element) {
//   console.log(element)
//   if( element > 5) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const filterCallback = element => element > 5;

const filterRes = anotherNumbersList.filter(el => el > 5)

console.log(filterRes)

console.log('after filter ', anotherNumbersList);

//input callback function
// output array

/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true
   callback(arr[i]) === true -> элемент будет добавлен в финальный массив
   callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив */

// c помощью метода filter создай новый массив bigNumbers, в котором будут числа > 5 из anotherNumbersList
// выведи bigNumbers в консоль

// put your code here

// c помощью метода filter создай новый массив evenPositions, в котором будут числа из четных позиций которые > 5
// массива anotherNumbersList
// выведи evenPositions в консоль

// put your code here

const numbersList5 = [1, 2, 3, 4, 5];

// input: (number(index of start), number(index of end) || none)
// output: array

console.log('before slice ', numbersList5);

const resSlice = numbersList5.slice(2, 4);
console.log(resSlice);

console.log('after slice ', numbersList5);

//////////////////////////////// Callback
/*
 * A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run after another function has finished
 * */

//input: ( num, num , callback function)
//output: undefined

function sum(from, to, printer) {
  let sum = 0;
  for (let index = from; index <= to; index += 1) {
    sum += 1;
  }

  printer(sum);
}
///test data
// function printResult(res) {
//   alert(res);
// }

function printResult(res) {
  console.log(res);
}

sum(4, 8, printResult);
