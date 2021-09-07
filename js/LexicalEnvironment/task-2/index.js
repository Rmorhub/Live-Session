/* eslint-disable no-use-before-define */
// input none
// output obj

// bad

// const createLogger = () => {
//   const memory = [];

//   function warn(text) {
//     const warnObj = {
//       message: text,
//       dateTime: new Date(),
//       type: 'warn',
//     };
//     memory.push(warnObj);
//   }
//   function error(text) {
//     const errorObj = {
//       message: text,
//       dateTime: new Date(),
//       type: 'error',
//     };
//     memory.push(errorObj);
//   }
//   function log(text) {
//     const logObj = {
//       message: text,
//       dateTime: new Date(),
//       type: 'log',
//     };
//     memory.push(logObj);
//   }
//   function getRecords(type = 'none') {
//     if (type !== 'none') {
//       const getmemory = memory.filter((element) => {
//         if (element.type === type) {
//           return element;
//         }
//       });
//       return getmemory.sort((a, b) => b.dateTime - a.dateTime);
//     }
//     return memory.sort((a, b) => b.dateTime - a.dateTime);
//   }
//   return {
//     warn,
//     error,
//     log,
//     getRecords,
//   };
// };

// const logger1 = createLogger();
// logger1.error('some error');
// logger1.error('some error text');
// logger1.log('some log');
// console.log(logger1.getRecords());

// const logger2 = createLogger();
// logger2.error('unexpected error');
// console.log(logger2.getRecords());
// good

const createLogger = () => {
  const memory = [];

  function warn(text) {
    pusher(text, 'warn');
  }

  function error(text) {
    pusher(text, 'error');
  }

  function log(text) {
    pusher(text, 'log');
  }

  function pusher(text, type) {
    memory.push({
      message: text,
      dateTime: new Date(),
      type,
    });
  }

  // better option for func
  // function getRecords(type) {
  //   let res = memory;
  //   if (type) {
  //     res =  memory.filter(element => element.type === type);
  //   }
  //   return res.sort((a, b) => b.dateTime - a.dateTime);
  // }

  // good option for func
  function getRecords(type) {
    const records = type
      ? memory.filter((element) => element.type === type)
      : memory;
    return records.sort((a, b) => b.dateTime - a.dateTime);
  }
  return {
    warn,
    error,
    log,
    getRecords,
  };
};

const logger1 = createLogger();
logger1.error('some error');
logger1.error('some error text');
logger1.log('some log');
console.log(logger1.getRecords());

const logger2 = createLogger();
logger2.error('unexpected error');
console.log(logger2.getRecords());
