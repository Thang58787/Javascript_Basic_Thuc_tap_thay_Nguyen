function find_Sum(num){
    let sum=0;
    while(num>0){
        sum+=num;
        num=Math.floor(num/2);
    }
    return sum;
}
console.log(find_Sum(8))
console.log(find_Sum(9))
