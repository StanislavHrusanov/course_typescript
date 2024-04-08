const user1 = {
    name: 'Stan',
    age: 20,
    job: { title: 'CEO', description: 'My own company' }
};

console.log(user1?.job?.description);

const userInput = undefined;
const userInput1 = null;
const userInput2 = '';

const storedData = userInput ?? 'DEFAULT';
const storedData1 = userInput1 ?? 'DEFAULT';
const storedData2 = userInput2 ?? 'DEFAULT';

console.log(storedData);
console.log(storedData1);
console.log(storedData2);