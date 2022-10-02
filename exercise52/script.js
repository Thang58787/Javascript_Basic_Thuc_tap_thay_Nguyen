function alphabetSoup(str) {
    str = str.split("");
    str.sort();
    str = str.join("");
    return str;
}

console.log(alphabetSoup("Python"));
console.log(alphabetSoup("Exercises"));