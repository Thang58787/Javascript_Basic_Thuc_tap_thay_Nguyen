function capitalizeLetters(str) {
    str = str.split(" ");
    for(let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
    return str.join(" ");
}

console.log(capitalizeLetters("Write a JavaScript program to capitalize the first letter of each word of a given string."));