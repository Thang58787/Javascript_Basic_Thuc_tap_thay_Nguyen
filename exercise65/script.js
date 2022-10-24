function checkString(str) {
    let length = str.length;
    if (length >= 6) {
        let letter = str.slice(length - 6, length);
        if (letter == 'Script') {
            return true;
        }
        return false
    }
    return false
}
console.log(checkString("JavaScript"));
console.log(checkString("Java Script"));
console.log(checkString("Java Scripts"));