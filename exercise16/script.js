function sum(num1, num2) {
    let sum;
    if(num1 === num2) {
        sum = (num1+num2)*3;
    } else {
        sum = num1+num2;
    }
    return sum;
}

console.log(sum(10,20));
console.log(sum(10,10));