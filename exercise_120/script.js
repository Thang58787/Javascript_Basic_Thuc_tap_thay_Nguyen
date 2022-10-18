function check_a_point (x,y,a,b,r){
    let temp = Math.sqrt((a-x)*(a-x)+(b-y)*(b-y));
    if(temp<=r){
        return true
    }
    return false;
}
console.log(check_a_point(0, 0, 2, 4, 6));
console.log(check_a_point(0, 0, 6, 8, 6));
