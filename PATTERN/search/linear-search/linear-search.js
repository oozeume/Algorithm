function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
    return -1;
  }
}

linearSearch([34, 35], 34)