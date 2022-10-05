function copyString(str, n) {
    if (n > 0) {
        let newStr = " ";
        newStr = str.repeat(n);
        return newStr;
    } if (n == 0) {
        return str;
    }
    else {
        return false
    }
}
console.log(copyString("abc", 5));
console.log(copyString("abc", 0));
console.log(copyString("abc", -2));

