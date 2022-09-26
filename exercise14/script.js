const file = "hello.md";
const getExtension = str => str.slice(str.lastIndexOf(".") + 1);
console.log(getExtension(file));