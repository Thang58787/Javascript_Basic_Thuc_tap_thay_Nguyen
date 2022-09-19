function dienTich (a, b, c){
    let output = 0;
    let p = (a + b +c)/2;
    output = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return output;

}
console.log(dienTich(3,4,5))