function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > currentValue) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

console.log(insertionSort([9, 76, 4, 2, 1]))
