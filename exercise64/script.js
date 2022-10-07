function concatenateString(str1, str2) {
    let length1 = str1.length;
    let length2 = str2.length
    if (length1 == length2) {
        return str1 + str2;
    } if (length1 > length2) {
        str1 = str1.slice(length1 - length2);
        return str1 + str2;
    } if (length1 < length2) {
        str2 = str2.slice(length2 - length1);
        return str1 + str2;
    }
}

console.log(concatenateString("Python", "JS"));
console.log(concatenateString("ab", "cdef"));