function add(num1, num2 = 10) {
    return num1 + num2;
}
// will get the default value
const total = add(15);
// will take the parameter value
const total2 = add(15, 16);

console.log(total);
console.log(total2);