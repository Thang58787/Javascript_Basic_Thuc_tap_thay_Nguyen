function check(str) {
    if(str.slice(4,10) === "script")
        return true;
    return false;
}

console.log(check("Javascript"));
console.log(check("Python"));