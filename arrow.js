// function declaration

// function doubleIt(num) {
//     return num * 2
// }

// function expression

// const result = doubleIt(5);
// console.log(result);


// const doubleIt = function muFunc(num) {
//     return num * 2;
// }
// arrow function
// const doubleIt = num => num * 2;
// const add = (x, y) => x + y;

// const result = add(5, 3);
// console.log(result);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const resul2 = doMath(7, 5);
console.log(resul2);