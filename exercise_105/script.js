function findNumber(num) {
    var digits = num.toString().split('');
    var realDigits = digits.map(Number);
    let sum = 0;
    for(let i = 0;i<realDigits.length;i++){
        sum+=realDigits[i];
    }
    let numofStr = sum.toString();
    return numofStr.length;
}
console.log(findNumber(123))
console.log(findNumber(156))