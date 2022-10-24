function multiple(num) {
    if (num % 3 == 0 || num % 7 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(multiple(6));
console.log(multiple(14));
console.log(multiple(19));
