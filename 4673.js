const number = 10000;
const cheakArray = Array(number + 1).fill(true);

function func(n) {
    let s = n;
    while (n) {
        s += n % 10;
        n = Math.floor(n / 10);
    }
    return s + n;
}

for (let i = 1; i <= number; i++) {
    const t = func(i);
    if (t < number) {
        cheakArray[t] = false;
    }
}

for (let i = 1; i < number; i++) {
    if (cheakArray[i]) console.log(i);
}