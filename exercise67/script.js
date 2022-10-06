function newString(str) {
    if(/^P|P$/.test(str))
        return str.replace(/^P|P$/g, "");
    return str;
}

console.log(newString("PythonP"));
console.log(newString("Python"));
console.log(newString("JavaScript"));
