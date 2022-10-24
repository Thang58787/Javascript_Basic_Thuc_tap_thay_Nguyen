function findNumber (arr){
    console.log(Math.max(...arr));
}
findNumber([10, 324, 45, 90, 9808])


function max_even (arr){
    let max= 0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max
}
console.log(max_even([20, 40, 200]));
console.log(max_even([20, 40, 200, 301]));