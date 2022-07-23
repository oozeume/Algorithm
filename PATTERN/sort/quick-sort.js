function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    console.log(arr)
    quickSort(arr, left, pivotIndex - 1); // left
    quickSort(arr, pivotIndex + 1, right); // right
  }
  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 6, 7]))