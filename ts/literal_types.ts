// Literal types

type orderStatus = 'delivered' | 'pending' | 'shipped';

let order: orderStatus = 'pending';

let answer: 'yes' | 'no';

answer = 'yes';

// number literal

let count: 0 | 1 | 2;
count = 2;

// boolean literal
let isActive: true | false;
isActive = true;

type litralType = 42 | 'hello' | true;

let myLiteral: litralType;
myLiteral = 42;
myLiteral = 'hello';
myLiteral = true;

type Action = 'start' | 'stop' | 'pause';
function performAction(action: Action) {
  if (action === 'start') {
    console.log('Action started');
  } else if (action === 'stop') {
    console.log('Action stopped');
  } else if (action === 'pause') {
    console.log('Action paused');
  }
}
performAction('start');
performAction('pause');
