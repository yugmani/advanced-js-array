const array1 = [[1, 2], [3, [4, 5], 6], [7], [8, 9, 10]];

function justFlatten(arr) {
  const a_flat = arr.flat();
  a_flat.forEach(item => console.log(item));
}

justFlatten([[1, 2], [3, [4, 5], 6], [7], [8, 9, 10]]);
