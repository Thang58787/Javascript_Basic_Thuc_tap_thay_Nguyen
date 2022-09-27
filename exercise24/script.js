function frontBack(str) {
    let newStr = str.charAt(0) + str + str.charAt(0);
    return newStr;
}

console.log(frontBack("a"));
console.log(frontBack("ab"));
console.log(frontBack("abc"));