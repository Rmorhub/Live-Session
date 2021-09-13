// 'use strict';

// const timer = {
//   secondsPassed: 0,
//   minsPassed: 0,

//   startTimer() {
// ================================ lose context case #2
// [1, 2, 4].filter(function () {
//   console.log('filter this: ' + this);
// });

// ================================= lose context case #2
// setInterval(function () {
//     console.log(this);
//   this.secondsPassed += 1;
// }, 1000);

// ================================= fix context case #2 with bind
// const callbackFunc = function () {
//   console.log(this);

//   this.secondsPassed += 1;
// };

// const bindedCallbackFunc = callbackFunc.bind(this);

// setInterval(bindedCallbackFunc, 1000);

// ================================= fix context case #2 with bind
// setInterval(function () {
// console.log(this);
// this.secondsPassed += 1;
// }.bind (this) , 1000);

// function filter (callback) {
// ...
// callback();
// ...
// }

// function setInterval (callback) {
// ...
// ...
// ...
// window.callback();
// }
//   },
//   stopTimer() {
//     //
//   },
//   resetTimer() {},
// };

// context  -  объект в рамках которого выполняется функция.
// 1. know when context is lost (2-3 cases)
// 2. fix context

// timer.startTimer();

// lose context case #1
// const startTimerFunc = timer.startTimer;
// startTimerFunc();

// set interval example

// setInterval (() => {
//     console.log('Monday')
// }, 2000)

// clearInterval();

// lose context case #2
// [1, 2, 4].filter(function () {
//   console.log('filter this: ' + this);
// });

'use strict';

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  timerId: null,

  startTimer() {
    this.timerId = setInterval(() => {
      console.log(this);
      this.secondsPassed += 1;

      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },
  stopTimer() {
    clearInterval(this.timerId);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },

    getTime() {
    if (this.secondsPassed < 10) {
      return `${this.minsPassed}:0${this.secondsPassed}`;
    } else {
      return `${this.minsPassed}:${this.secondsPassed}`;
    }
  },
};

// context  -  объект в рамках которого выполняется функция.
// 1. know when context is lost (2-3 cases)
// 2. fix context

timer.startTimer();