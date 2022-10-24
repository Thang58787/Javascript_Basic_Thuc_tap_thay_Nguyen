function checkNumber (arr){
    if(arr.length==2){
        for(let i =0;i<arr.length;i++){
            if(arr[i]==1||arr[i]==3){
                return true;
            }
        }
    }
    return false;
}
console.log(checkNumber([1, 5]));  
console.log(checkNumber([2, 3]));  
console.log(checkNumber([7, 5])); 