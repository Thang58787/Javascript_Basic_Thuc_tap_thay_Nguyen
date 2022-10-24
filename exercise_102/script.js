function checkNumber(arr){
    let result = 0
    for(let i = 0;i<arr.length;i++){
        for(let j =i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                result++
            }
        }
    }
    return result;
}
console.log(checkNumber([0, 3, 2, 5, 9]));   
console.log(checkNumber([1, 5, 4, 3]));   
console.log(checkNumber([10, 30, 20, -10]));  
