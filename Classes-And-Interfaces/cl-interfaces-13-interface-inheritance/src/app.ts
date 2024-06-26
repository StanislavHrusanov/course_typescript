interface Named {
  name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 36;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}.`);
  }
}

let user1: Greetable;

user1 = new Person('Stan');

user1.greet('Hi, I am');

console.log(user1);