function reverseString (str){
    let strnew = '';
    for(var i = str.length - 1; i >= 0; i--){
        strnew += str[i];
    }
    return strnew;
}
console.log(reverseString('quangchung'))
