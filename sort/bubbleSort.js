
function bubbleSort(arr) {
  let n = 0;
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) { // 比较相邻元素大小并交换位置
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
      n++
    }
  }
  console.log(n)
  return arr;
}

console.log(bubbleSort([24, 40, 6, 67, 6, 76, 7, 60, 93, 5, 29, 42, 3, 79, 8, 9]))

// [3, 5, 6, 6, 7, 8, 9, 24, 29, 40, 42, 60, 67, 76, 79, 93]
