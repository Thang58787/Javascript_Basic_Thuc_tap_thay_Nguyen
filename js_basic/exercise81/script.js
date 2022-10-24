function addNumber(num) {
    let arr = Array.from(String(num), Number);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}
console.log(addNumber(25))
console.log(addNumber(50))

// cách 2
function add_Number(num) {
    return(num % 10 + Math.floor(num/10))
}
console.log(add_Number(25))
console.log(add_Number(50))