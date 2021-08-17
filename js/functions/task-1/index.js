/*
 * ф-ция getSenseOfLife не должна принимать аргументы
 * ф-ция getSenseOfLife должна вернуть число 42
 */

// function getSenseOfLife () {
//     return 42
// }

// console.log(getSenseOfLife())

/* ф-ция getSquared должна принимать число и вернуть квадрат этого числа */

// function getSquared(num) {
//   return num * num;
// }

// console.log(getSquared(4));

/* ф-ция sum должна принимать два числа и вернуть их сумму */

// function sum (firstNum,secondNum) {
//   return firstNum + secondNum;
// }

// console.log(sum(4,6));

/*
 * ф-ция sum должна принимать число
 * ф-ция sum должна вывести в консоль строку 'I am 34 years old'
 * где 34 - число, полученное в аргументах
 */

// function getMessage(num) {
//   console.log(`I am ${num} years old`)
// }
// getMessage(20)
// getMessage(34)

/* ======> Arrow functions <======= */

/* ф-ция mult должна принимать два числа и вернуть их произведение */

const mult = (firstNum, secondNum) => firstNum * secondNum;

console.log(mult(4, 3));
console.log(mult(4));


// const mult = (firstNum = 1, secondNum = 1) => firstNum * secondNum;
// console.log(mult(4,3))
// console.log(mult(4));

/* ф-ция square должна принимать число и вернуть его, возведенное в квадрат */

const square = (num) => num * num;

console.log(square(3));

/*
 * ф-ция getMagicNumber не должна принимать аргументы
 * ф-ция getMagicNumber должна вернуть число 17
 */

const getMagicNumber = () => 17;

console.log(getMagicNumber());
console.log(getMagicNumber(18));
