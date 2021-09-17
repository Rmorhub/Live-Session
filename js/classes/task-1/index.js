class Sportsman {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`${this.name} is running`);
  }
}

// test data
const runnerJohn = {
  name: 'John',
};

const runner = new Sportsman('John');
console.log(runner);
console.log(runnerJohn);
runner.run();

class Swimmer extends Sportsman {
  constructor(name, swimStyle) {
    super(name);
    this.swimStyle = swimStyle;
  }
  swim() {
    console.log(`${this.name} swimming ${this.swimStyle}`);
  }
}

const swimmer = new Swimmer('Mike','testStyle');
console.log(swimmer)




// option 1st =====================================================================================

// class Sportsman {
//   constructor(name) {
//     this.name = name;
//   }

//   run() {
//     console.log(`${this.name} is running`);
//   }
// }

// const runner = new Sportsman('John')
// console.log(runner)
// runner.run()

// class Swimmer{
//   constructor(name, swimStyle) {
//     this.name =name;
//     this.swimStyle = swimStyle;
//   }

//   swim() {
//     console.log(`${this.name} swimming ${this.swimStyle}`);
//   }
// }

// Object.setPrototypeOf(Swimmer,Sportsman)

// const swimmer = new Swimmer('John','breaststroke')

// swimmer.swim()

// option 2 ==========================================================================

// class Sportsman {
//   constructor(name) {
//     this.name = name;
//   }

//   run() {
//     console.log(`${this.name} is running`);
//   }
// }

// const runner = new Sportsman('John');
// runner.run();

// class Swimmer extends Sportsman {
//   constructor(name, swimStyle) {
//     super(name)
//     this.swimStyle = swimStyle;
//   }

//   swim() {
//     console.log(`${this.name} swimming ${this.swimStyle}`);
//   }
// }

// const swimmer = new Swimmer('John', 'breaststroke');

// swimmer.swim();
