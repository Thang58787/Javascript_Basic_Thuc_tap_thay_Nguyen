function removeCharacter(str, position) {
    let newStr = str.substring(0, position) + str.substring(position + 1, str.length);
    return newStr;
}

console.log(removeCharacter("Python", 0));
console.log(removeCharacter("Pythonks", 3));
console.log(removeCharacter("Python", 5));