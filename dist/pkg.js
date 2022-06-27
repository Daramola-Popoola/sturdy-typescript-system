"use strict";
function factorial(x) {
    let y = 1;
    for (let i = 1; i <= x; i++) {
        y *= i;
    }
    return y;
}
console.log(factorial(2));
