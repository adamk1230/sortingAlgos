
const insertionSort = (arr) => {
  const sortedArr = arr;
  let index = 1;

  while (index < sortedArr.length) {
    if (sortedArr[index] > sortedArr[index - 1]) {
      index += 1;
    } else {
      let swapIndex = index - 1;
      const temp = sortedArr[index];

      while (swapIndex >= 0 && temp < sortedArr[swapIndex]) {
        sortedArr[swapIndex + 1] = sortedArr[swapIndex];
        swapIndex -= 1;
      }

      sortedArr[swapIndex + 1] = temp;
      index += 1;
    }
  }

  return sortedArr;
};

const insertionSortSlice = (arr) => {
  const sortedArr = arr;
  let index = 1;

  while (index < arr.length) {
    if (sortedArr[index] > sortedArr[index - 1]) {
      index += 1;
    } else {
      const temp = sortedArr.splice(index, 1)[0];
      let insertIndex = index - 1;

      while (insertIndex > -1 && sortedArr[insertIndex] > temp) {
        insertIndex -= 1;
      }

      sortedArr.splice(insertIndex + 1, 0, temp);
      index += 1;
    }
  }

  return sortedArr;
};


const unsortedArr = [3, 5, 7, 1, 2, 4, 6, 1, 7, 1, 8, 9, 2];
const unsortedArr2 = [3, 5, 7, 1, 2, 4, 6, 1, 7, 1, 8, 9, 2];

console.log(insertionSort(unsortedArr));
console.log(insertionSortSlice(unsortedArr2));
