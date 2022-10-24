function createString(str) {
    str =str.split('');
    let last = str.pop();
    let first = str.shift();
    if(last =='P' && first =='P'){
        return str.join('')
    }
    return str.join('');
}

console.log(createString("PythonP"));
console.log(createString("Python"));