
const quickSort = (arr) => {
  if (arr < 2) return arr;

  const pivot = arr[arr.length - 1];
  const lessThan = [];
  const greaterThan = [];


  for (let i = 0; i < arr.length - 1; i += 1) {
    (arr[i] <= pivot ? lessThan : greaterThan).push(arr[i]);
  }

  return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)];
};

const unsortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(quickSort(unsortedArr));
