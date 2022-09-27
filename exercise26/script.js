function addcharacter(str) {
    let letter = str.slice(-3);
    let newstr = "";
    newstr = letter + str + letter;
    return newstr;
}
console.log(addcharacter('quangchung'))