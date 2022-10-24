function replaceNUmber (str){
    let newarr = str.split('')
    var realDigits = newarr.map(Number);
    let temp = realDigits[1];
    let sum=0
    for(temp = 0 ;temp<=9;temp++){
        for(let j=0;j<3;j++){
            sum+=realDigits[j]
        }
    }
    return sum;
}
console.log(replaceNUmber('1*3'))