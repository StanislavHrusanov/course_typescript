function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger('LOGGING - PERSON')
class Person {
  name = 'Stan';

  constructor() {
    console.log('Creating a person object...');
  }
}

const person = new Person();

console.log(person);