function frontBack3(str) {
    if (str.length >= 3) {
        let newStr = str.slice(-3) + str + str.slice(-3);
        return newStr;
    } else
        return false;

}

console.log(frontBack3("abc") === "abcabcabc");
console.log(frontBack3("ab") === false);
console.log(frontBack3("abcd") === "bcdabcdbcd");
