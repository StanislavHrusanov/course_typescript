interface Lenghty {
  length: number
}

function countAndDescribe<T extends Lenghty>(element: T) {
  let descriptionText = 'Got no value!';

  if (element.length === 1) {
    return 'Got 1 element.';
  } else if (element.length > 1) {
    return `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Abc'));
console.log('---');
console.log(countAndDescribe([]));
console.log('---');
console.log(countAndDescribe(['Stan']));
console.log('---');
console.log(countAndDescribe(['Stan', 'John']));