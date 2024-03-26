function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: 'as-number' | 'as-text'
) {
    let result;

    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = Number(input1) + Number(input2);
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combinedAges = combine(30, 40, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('20', '30', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Stan', 'John', 'as-text');
console.log(combinedNames);


