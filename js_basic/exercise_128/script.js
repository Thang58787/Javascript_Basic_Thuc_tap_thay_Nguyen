function findNumber (num) {
    while (num % 10 ) {
        num++;
    }
    return num;
}

console.log(findNumber (54));
console.log(findNumber (592));