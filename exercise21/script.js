function stringCheck(str) {
    if (str.substring(0, 2) === "Py") {
        return str;
    } else {
        let newStr = "Py".concat(str);
        return newStr;
    }
}

console.log(stringCheck("Python"));
console.log(stringCheck("thon"));