function test(str) {
    if (str.length < 6)
        return false;
    return /Script$/.test(str);
}

console.log(test("JavaScript"));
console.log(test("Java Script"));
console.log(test("Java Scripts"));