function checkString(str, char) {
    for (let i = 0; i < str.length; i++) {
        if ((str.charAt(i) == char) && (i >= 1 && i <= 3)) {
            return true;
        }
    }
    return false;
}
console.log(checkString("Python", "y"));
console.log(checkString("JavaScript", "a"));
console.log(checkString("Console", "o"));
console.log(checkString("Console", "C"));
console.log(checkString("Console", "e"));
console.log(checkString("JavaScript", "S"));