function switchCase(str) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < str.length; i++) {
        if (/[A-Z]/.test(str[i])) {
            a++
        } else {
            b++
        }
    }
    if (b > a) {
        return str.toLowerCase()
    }
    return str.toUpperCase()

}
console.log(switchCase("ABCDe"))
console.log(switchCase("PHp"))