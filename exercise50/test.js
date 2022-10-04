function titleCase(str) {
    //var myString = str.toLowerCase().split('');;
    for (let i = 0; i <= myString.length - 1; i++) {
        if (myString[i] === " ") {
            i = i + 1;
            myString = myString[i].toUpperCase();

        }

    }
    return myString;


}
console.log(titleCase('quang nhung nanana SHDJGSbdsxclksjb'))