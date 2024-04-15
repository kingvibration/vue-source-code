
// 计数器
let n = 0

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
    n++
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

console.log(quickSort([24, 40, 6, 67, 6, 76, 7, 60, 93, 5, 29, 42, 3, 79, 8, 9]))

console.log(n)

// [3, 5, 6, 6, 7, 8, 9, 24, 29, 40, 42, 60, 67, 76, 79, 93]
