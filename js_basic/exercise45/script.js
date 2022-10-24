function checktwoNumber(a, b) {
    if (a === 15 || b === 15) {
        return true;
    } if ((a + b === 15) || Math.abs(a - b === 15)) {
        return true;
    }
    return false;
}
console.log(checktwoNumber(15, 1));
console.log(checktwoNumber(10, 5));
console.log(checktwoNumber(20, 5));
console.log(checktwoNumber(20, 6));

