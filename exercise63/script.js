function createString(str) {
    let length = str.length;
    if (length >= 3) {
        let position = Math.floor(length / 2 - 1);
        return str[position] + str[position + 1] + str[position + 2]
    }
    return false
}
console.log(createString('abcdefg'));
console.log(createString('HTML5'));
console.log(createString('Python'));
console.log(createString('PHP'));
console.log(createString('Exercises'));