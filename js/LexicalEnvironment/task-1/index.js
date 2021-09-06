/* eslint-disable */

/*
// ============  global
{
  'enviromentRecord: {
    'message': 'Test',
    'weight': 55,
    'createMessenger': func,
    ...
  },
  'outherLexicalEnv': null
 }
 // =========   createMessenger
 {
   'createMessenger': {
     'message': 'Just learn it';
     'sender':'Gromcode';
     'sendMessage' func
     'setSender' func
     'setMessage' func
     ....
   },
   'outherLexicalEnv': global
  }
  // =============== run 
 {
   'run': {
   },
   'outherLexicalEnv': global
  }
  // ============== sendMessage
 {
   'sendMessage': {
   },
   'outherLexicalEnv': createMessenger
  }
 }
*/

const message = 'test message';
const weight = 55;

for (let index = 0; index < 5; index +=1) {
  console.log(index)
}

if (true) {
  const currentDay = 'Monday';
  console.log(message)
}

console.log(currentDay)

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger = createMessenger();
messanger.sendMessage('TestName');
run();

