
const binarySearch = (target, arr) => {
  console.log(`target: ${target}, arr: ${arr}`);
  if (arr.length === 1) {
    return arr[0] === target;
  }

  const middle = Math.floor(arr.length / 2);

  if (arr[middle] === target) return true;
  const array = arr.slice();
  const left = array;
  const right = array.splice(middle, array.length - middle);

  return arr[middle] < target ? binarySearch(target, right) : binarySearch(target, left);
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(2, arr));
console.log(binarySearch(8, arr));
console.log(binarySearch(10, arr));
