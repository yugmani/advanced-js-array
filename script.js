const array1 = [[1, 2], [3, [4, 5], 6], [7], [8, 9, 10]];

// 1.
// Flatten single dimenstional array.
function justFlatten(arr) {
  const a_flat = arr.flat();
  return a_flat;
}

// console.log(justFlatten(array1));
// Expected 1, 2, 3, [4, 5], 6, 7, 8, 9, 10

// 2.
// Flatten multi-dimenstional array
function nestedFlatten(arr) {
  return arr.reduce(
    (accumulator, currentVal) =>
      Array.isArray(currentVal)
        ? accumulator.concat(nestedFlatten(currentVal))
        : accumulator.concat(currentVal),
    []
  );
}

// console.log(nestedFlatten(array1));
// Expected 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// Reference https://www.ma-no.org/en/programming/javascript/flattening-arrays-in-javascript

// 3.
// Understanding Array.from() Method

const string = 'APPLE';
const arrayFrom = Array.from(string);

// console.log(arrayFrom);
// Expected ['A', 'P', 'P', 'L', 'E']

//4. How to populate an array with random numbers in JavaScript
const myArray = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 10)
);

// console.log(myArray);

// Expected [0, 0, 8, 5, 1, 5, 4, 5, 9, 5] may be different in your case
// Reference: https://attacomsian.com/blog/javascript-array-from
// Reference https://www.ma-no.org/en/programming/javascript/how-to-populate-an-array-with-random-numbers-in-javascript

// 5. JavaScript Array at() method

const fruits = ['banana', 'cherry', 'peach', 'berry', 'pineaple'];

const fruitAt3 = fruits[3];
console.log('Fruit at 3: ' + fruitAt3); // Expected "berry";
const fruitLast = fruits[fruits.length - 1];
console.log('last: ' + fruitLast); // Expected "pineaple";

//at(index) Method
// The at(index) method accepts both positive and negative numbers as an index.
// The negative index count back from the array whereas, the positive index count from the beginning as usual.

const fruitsAt0 = fruits.at(-2);
console.log('Fruits at 0: ' + fruitsAt0);
