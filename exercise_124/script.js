function value_of_NOR (a,b){
    if(!a && !b){
        return true
    }
    return false
}
console.log(value_of_NOR(true, false));
console.log(value_of_NOR(false, false));
console.log(value_of_NOR(true, true));