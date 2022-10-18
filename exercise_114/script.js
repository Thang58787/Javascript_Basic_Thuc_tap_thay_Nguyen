function checkString(str) {
    let firstletter = str.slice(0, 1)
    let lastletter = str.slice(str.length - 1, str.length);
    if ((/[A-Z]/.test(firstletter)) && lastletter == '.') {
        return true
    }
    return false

}
console.log(checkString("This tool will help you write better English and efficiently corrects texts."));
console.log(checkString("This tool will help you write better English and efficiently corrects texts"));
console.log(checkString("this tool will help you write better English and efficiently corrects texts."));