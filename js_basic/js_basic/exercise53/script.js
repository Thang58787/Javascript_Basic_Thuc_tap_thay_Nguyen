function checkCharacters(str) {
    var newStr = str.split('');
    var indexA = newStr.indexOf('a');
    var indexB = newStr.indexOf('b');
    var index = indexB - indexA;
    if (index == 4) {
        return true;
    }
    return false;

}
console.log(checkCharacters("Chainsbreak"));
console.log(checkCharacters("pane borrowed"));
console.log(checkCharacters("abCheck"));