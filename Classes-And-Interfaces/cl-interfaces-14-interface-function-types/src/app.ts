interface AddFn {
  (n1: number, n2: number): number;
}

let add: AddFn;

add = (num1: number, num2: number) => {
  return num1 + num2;
}

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;

user1 = new Person('Stan');

user1.greet('Hi there - I am');
console.log(user1);