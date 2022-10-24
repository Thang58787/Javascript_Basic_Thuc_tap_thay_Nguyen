function createString(str, n) {
    let firstletter = str.slice(0, n);
    let lastletter = str.slice(-n);
    return firstletter + lastletter;
}
console.log(createString("JavaScript", 2));
console.log(createString("JavaScript", 3));