function moveThree(str) {
    if (str.length < 3)
        return str;
    return str.substring(str.length - 3) + str.substring(0, str.length - 3);
}

console.log(moveThree("Python"));
console.log(moveThree("JavaScript"));
console.log(moveThree("Hi"));