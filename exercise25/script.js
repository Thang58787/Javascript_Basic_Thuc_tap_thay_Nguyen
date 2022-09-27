function test37(num) {
    if (num % 3 === 0 || num % 7 === 0)
        return true;
    return false;
}

console.log(test37(12));
console.log(test37(14));
console.log(test37(10));
console.log(test37(11));