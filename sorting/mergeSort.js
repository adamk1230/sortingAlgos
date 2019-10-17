
const merge = (arr1, arr2) => {
  const sortedArr = [];

  while (arr1.length > 0 && arr2.length > 0) {
    arr1[0] > arr2[0] ? sortedArr.push(arr2.shift()) : sortedArr.push(arr1.shift());
  }

  return arr1.length > 0 ? [...sortedArr, ...arr1] : [...sortedArr, ...arr2];
};


const mergeSort = (arr) => {
  if (arr.length === 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const firstHalf = arr;
  const secondHalf = arr.splice(middle, arr.length - middle);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
};


const unsortedArr = [3, 5, 7, 1, 2, 4, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7];
console.log(mergeSort(unsortedArr));

// console.log(merge([2, 5], [3, 9]));
