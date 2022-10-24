function copyString(str) {
    let length = str.length;
    let newstr = " ";
    if (length >= 3) {
        newstr = str.slice(length - 3, length);
        return newstr.repeat(3);
    }
    return false;

}
console.log(copyString("Python 3.0"));
console.log(copyString("JS"));
console.log(copyString("JavaScript"));