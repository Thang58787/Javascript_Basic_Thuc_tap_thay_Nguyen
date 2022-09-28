// Write a JavaScript program to check a given string 
// contains 2 to 4 numbers of a specified character.

function checkChar(str, char) {
    const length = str.length;
    let count = 0;
    for (let i = 0; i < length; ++i) {
        if (str.charAt(i) === char)
            count++;
    }
    if (count >= 2 && count <= 4)
        return true;
    return false;
}

console.log(checkChar("Python", "y"));
console.log(checkChar("JavaScript", "a"));
console.log(checkChar("Console", "o"));
console.log(checkChar("Console", "C"));
console.log(checkChar("Console", "e"));
console.log(checkChar("JavaScript", "S"));