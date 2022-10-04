function middleThree(str) {
    if (str.length < 3 || str.length % 2 === 0)
        return str;
    let left = (str.length - 1) / 2 - 1;
    let right = (str.length - 1) / 2 + 1;
    return str.substring(left, right + 1);
}

console.log(middleThree('abcdefg'));
console.log(middleThree('HTML5'));
console.log(middleThree('Python'));
console.log(middleThree('PHP'));
console.log(middleThree('Exercises'));