const array1 = [[1, 2], [3, [4, 5], 6], [7], [8, 9, 10]];

// Flatten single dimenstional array.
function justFlatten(arr) {
  const a_flat = arr.flat();
  a_flat.forEach(item => console.log(item));
}

// justFlatten(array1);

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

console.log(nestedFlatten(array1));
