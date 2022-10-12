function replaceCharacter(str) {
    let newstr = '';
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) == 90) {
            newstr += 'A';
        }
        if (str.charCodeAt(i) == 122) {
            newstr += 'a';
        } else if ((96 < str.charCodeAt(i) && str.charCodeAt(i) < 122) || (64 < str.charCodeAt(i) && str.charCodeAt(i) < 90)) {
            let letter = str.charCodeAt(i) + 1;
            newstr += String.fromCharCode(letter);
        } else {
            newstr += str.charAt(i);
        }
    }
    return newstr;
}
console.log(replaceCharacter('abcdxyz'))