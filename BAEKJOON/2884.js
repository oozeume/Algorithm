// 1번째 (x)

let H = 10;
let M = 10;

M = M - 45;

if (M >= 45) {
    console.log(H, M - 45);
}
if (M < 0) {
    M += 60;
    H--;
    if (H === -1) {
        H = 23;
    }
    console.log(H, M);
}

// 2번째 (x)

let H = 10;
let M = 10;

if (M >= 45) {
    console.log(H, M - 45);
}

if (M - 45 < 0) {
    M = (M + 60) - 45;
    H--;
    if (H === -1) {
        H = 23;
    }
    console.log(H, M);
}

// 3번째 (o)

let H = 0;
let M = 0;

M -= 45;
// 분 -45를 다시 분으로 재할당

if (M < 0) {
    // 분이 < 0보다 작을때 [ex) 10분일때 M값은 -35 ]
    M += 60; // -35 + 60 = 25 = M
    H--; // H - 1 = H

    if (H === -1) {
        // 0시 M분일때 위에서 H--로 H값이 -1이 될 때를 의미한다.
        H = 23;
    }
}

console.log(H, M);




