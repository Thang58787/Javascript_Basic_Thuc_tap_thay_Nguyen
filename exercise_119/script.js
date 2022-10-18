function checkNumber (num){
    var digits = num.toString().split('');
    var realDigits = digits.map(Number);

    for(let i =0;i<realDigits.length;i++){
        if(realDigits[i]>=realDigits[i+1]){
            return false
        }
    }
    return true
      
}
console.log(checkNumber(1434));
console.log(checkNumber(1234));

