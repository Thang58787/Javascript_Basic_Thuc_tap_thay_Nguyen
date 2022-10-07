function createString(str) {
    if (str.length >= 3) {
        let lastsElement = str.slice(0, -3);
        let firstsElement = str.slice(-3);
        return firstsElement + lastsElement;
    }
    return str;
}
console.log(createString("Python"));
console.log(createString("JavaScript"));
console.log(createString("Hi"));