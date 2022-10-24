function newString(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    } else {
        let firstString = str.slice(0, 3);
        let lastString = str.slice(3, str.length);
        firstString = firstString.toLowerCase();
        return firstString + lastString;
    }

}
console.log(newString('qUAngchung'));
console.log(newString('qa'));