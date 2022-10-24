function findNearest (num1,num2){
    a = Math.abs(num1-100);
    b = Math.abs(num2-100);
    if(a<b){
        return num1;
    }if(a==b){
        return false;
    }
    return num2;
}
console.log(findNearest(101,101));