function newstring(str) {
    if (str.length < 3)
        return false;
    return str.substring(str.length - 3).repeat(4);
}

console.log(newstring("Python 3.0"));
console.log(newstring("JS"));
console.log(newstring("JavaScript"));
