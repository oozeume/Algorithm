const num1 = 472;
const num2 = 385;

const num_one = num2 % 10 ; // 5
const num_ten = Math.floor((num2 % 100)/10);
const num_hundred = Math.floor(num2/100);

console.log(num1 * num_one);
console.log(num1 * num_ten);
console.log(num1 * num_hundred);
console.log(num1 * num2);