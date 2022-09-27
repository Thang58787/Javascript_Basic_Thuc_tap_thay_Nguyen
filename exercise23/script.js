function firstLast(str) {
    if (str.length === 1) {
        return str;
    } else {
        let newStr = str.charAt(str.length - 1) + str.slice(1, str.length - 1) + str.charAt(0);
        return newStr;
    }
}

console.log(firstLast("a"));
console.log(firstLast("ab"));
console.log(firstLast("abc"));
console.log(firstLast("abcd"));