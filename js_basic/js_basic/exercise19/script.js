function absNumber (num) {
    if(Math.abs(100-num)>20 ||Math.abs(400-num)>20 ){
        return true;
    }
    else {
        return false;
    }
}
console.log(absNumber(100))