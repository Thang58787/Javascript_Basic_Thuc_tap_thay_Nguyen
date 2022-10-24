function check(str) {
    if(str.slice(0,4) === "Java")
        return true;
    return false;
}

console.log(check("Javascript"));
console.log(check("Python"));