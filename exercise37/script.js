function upperLower(str) {
    if (str.length >= 3)
        return str.slice(0, 3).toLowerCase() + str.slice(3);
    else
        return str.toUpperCase();
}

console.log(upperLower("Python"));
console.log(upperLower("Py"));
console.log(upperLower("JAVAScript"));