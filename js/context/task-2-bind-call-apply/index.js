'use strict';
// ============================= bind

// input: context, arg1 ... argN(optional)
// output func with binded context

function printMessage(country, city) {
  console.log(this);

  console.log(
    `Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`
  );
}

const user = {
  firstName: 'Andrey',
  age: 111,
  tempFunc: 'some secret data',
};

// printMessage('Ukraine','Lviv')

// console.dir(printMessage);

// option 1
// const printMessageBinded = printMessage.bind(user)
// printMessageBinded('Ukraine','Lviv')

// printMessage.bind(user)('Ukraine', 'Lviv');

// option 2
// const printMessageBinded2 = printMessage.bind(user, 'UK', 'London');
// printMessageBinded2();

// option 3
// const printMessageBinded3 = printMessage.bind(user, 'Poland');
// printMessageBinded3('Warsaw');

// ======================= Call ============================
// input: func, context , arg1 ... argN (optional)
// output: bindedFunc

function myBind(func, context, ...args) {
  // call
  // input: context, arg1 ... argN
  // output: func result

  // input: same args as func
  // output: func result
  return function (...funcArgs) {
    func.call(context, ...args, ...funcArgs);
  };
}

// test data
const bindedFunc = myBind(printMessage, user)
bindedFunc('UK', 'London');

const bindedFunc2 = myBind(printMessage, user, 'Poland');
bindedFunc2('Warsaw');