function sum_of_absolute_differences (arr){
    let sum = 0;
    for(let i= 0 ;i<arr.length-1;i++){
        let diff = Math.abs(arr[i]-arr[i+1]);
        sum+=diff
    }
    return sum;
}
console.log(sum_of_absolute_differences([1, 2, 3, 2, -5]))