function sumofArray (arr){
    let sum = 0;
    if(arr.length==3){
        for(let i =0; i<arr.length;i++){
            sum +=arr[i];
        }
        return sum;
    }
    return false
}
console.log(sumofArray([10, 32, 20]));  
console.log(sumofArray([5, 7, 9])); 
console.log(sumofArray([0, 8, -11]));
