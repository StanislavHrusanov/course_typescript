function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;

    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

let num1: number;
num1 = 6;
const num2 = 10;
const printResult = true;
const resultPhrase = 'Result is ';

add(num1, num2, printResult, resultPhrase);