function findNumber(a, b, c) {
    if (a == b) {
        return c;
    } if (b == c) {
        return a;
    } if (a == c) {
        return b;
    }
    return false;
}
console.log(findNumber(1,2,2))
console.log(findNumber(1,1,2))
console.log(findNumber(1,2,3))