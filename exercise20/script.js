function positiveOrnegative (a, b){
    if ((a > 0 && b < 0) || (a < 0 && b > 0)){
        return true;
    } else{
        return false;
    }
}
console.log(positiveOrnegative(3,-4))