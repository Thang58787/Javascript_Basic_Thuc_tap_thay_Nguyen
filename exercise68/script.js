function twoString(str, n) {
    if(str.length < n)
        return "";
    return str.substring(0,n) + str.substring(str.length - n);
}

console.log(twoString("JavaScript", 2));
console.log(twoString("JavaScript", 3));