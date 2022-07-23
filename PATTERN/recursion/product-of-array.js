function productOfArrary(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArrary(arr.slice(1))
}

console.log(productOfArrary([1, 2, 3, 10]))