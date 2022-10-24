function addcharacter(str) {
    let letter = str.slice(0, 1);
    let newstr = "";
    newstr = letter + str + letter;
    return newstr;
}
console.log(addcharacter('quangchung'))