function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result is ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5, 10));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(5, 5));

addAndHandle(3, 3, (result) => {
    console.log(result);
});