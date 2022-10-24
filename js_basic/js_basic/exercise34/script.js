function largerNumber(a, b) {
    if ((a >= 40 && a <= 60) && (b >= 40 && b <= 60)) {
        if (a == b) {
            return 'same';
        } if (a > b) {
            return a;
        }
        return b;
    }
    return 'not in range'
}

console.log(largerNumber(60, 30));
//console.log(largerNumber(13, 11));
