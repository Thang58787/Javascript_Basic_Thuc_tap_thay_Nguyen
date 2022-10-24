function titleCase(myString) {
    var arr = myString.toLowerCase().split(' ');
    for (let i = 0; i <= arr.length - 1; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
}
console.log(titleCase('Write a JavaScript program to capitalize the first letter of each word of a given string.'))