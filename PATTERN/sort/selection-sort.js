function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimum = i
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[minimum], arr[j])
      if (arr[minimum] > arr[j]) {
        minimum = j
      }
    }
    if (i !== minimum) {
      [arr[i], arr[minimum]] = [arr[minimum], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([34, 22, 10, 23]))



