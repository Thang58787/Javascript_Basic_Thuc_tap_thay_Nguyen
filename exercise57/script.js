function stringCopies(str, n) {
    if (n < 0)
        return false;
    else
        return str.repeat(n);
}
console.log(stringCopies("abc", 5));
console.log(stringCopies("abc", 0));
console.log(stringCopies("abc", -2));
