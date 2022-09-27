function isStartWithJava(str) {
    if (str.slice(0, 4) === "Java")
        return true;
    return false;
}

console.log(isStartWithJava("Javascript") === true);
console.log(isStartWithJava("Java") === true);
console.log(isStartWithJava("Python") === false);