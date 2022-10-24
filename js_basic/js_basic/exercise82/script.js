function addNumber (a,b){
    let output = 0;
    let n =1;
    while(a>0 && b>0){
        output += n*((a%10+b%10))
        a = Math.floor(a/10);
        b = Math.floor(b/10);
        n*=10;
    }
    return output
}
console.log(addNumber(123,321))