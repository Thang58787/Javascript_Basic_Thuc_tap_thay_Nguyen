function checkScript(str) {
    if (str.slice(4) === "script")
        return str.slice(0, 4);
    return str;
}

console.log(checkScript("Javascript"));
console.log(checkScript("Coffeescript"));