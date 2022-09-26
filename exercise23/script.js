function changingPosition (str){
    str = str.split('');
    temp = str[0];
    str[0] = str[str.length - 1];
    str[str.length - 1]=temp;
    return str.join('')
}
console.log(changingPosition('quangchung'))