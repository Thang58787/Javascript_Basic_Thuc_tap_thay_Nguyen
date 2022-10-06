function createString (str) {
    let length  = str.length;
    let newcharater = str.slice(length-3,length);

    return newcharater
}
console.log(createString('quangchn'))