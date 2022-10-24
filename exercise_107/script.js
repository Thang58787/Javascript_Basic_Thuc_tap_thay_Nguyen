function number_of_sorted (arr){
    let result = 0;
    for(let i = 0;i<arr.length-1;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[j]%arr[i]==0||arr[i]%arr[j]==0){
                result++
            }
        }
    }
    return result;
}
console.log(number_of_sorted([2, 4, 16]))