function checkString(str) {
    for (let i = 0; i < str.length - 1; i++) {
        if ((/[a-z]/.test(str[i]) && /[a-z]/.test(str[i + 1]))) {
            return false
        }
    }
    for (let i = 0; i < str.length - 2; i++) {
        if ((/[a-z]/.test(str[i]) && /[a-z]/.test(str[i + 2]))) {
            return true
        } else {
            return false
        }
    }
}
console.log(checkString('xAr'));
console.log(checkString('XXAx'));
 