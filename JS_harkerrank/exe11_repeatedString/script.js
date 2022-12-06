function repeatedString(s, n) {
    // Write your code here
    let coun1str = 0;
    for (let letter of s) {
        if (letter === 'a') {
            coun1str += 1
        }
    }
    const div = Math.floor(n / s.length);
    const rest = n % s.length;
    let result = coun1str * div;
    if (rest === 0) return result
    else {
        for (let i = 0; i < rest; i++) {
            if (s[i] === 'a') {
                result += 1
            }
        }
    }
    return result
}
console.log(repeatedString("aba", 10))