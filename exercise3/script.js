function dienTich (a, b, c, d){
    let p = (a + b + c)/2;
    console.log(d)
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}
d = 3
console.log(dienTich(3,4,5, d))