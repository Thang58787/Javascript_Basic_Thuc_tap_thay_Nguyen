function concatenate(str1, str2) {
    if (str1.length > str2.length)
        str1 = str1.substring(str1.length - 2);
    if (str1.length < str2.length)
        str2 = str2.substring(str2.length - 2);
    return str1 + str2;
}

console.log(concatenate("Python", "JS"));
console.log(concatenate("ab", "cdef"));