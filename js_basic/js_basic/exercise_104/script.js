function findNumber(arr,num){
    let result = 0
    for(let i = 0;i<arr.length;i++){
        for(let j =i+1;j<arr.length;j++){
            let diff = Math.abs(arr[i]-arr[j]);
            if(num>=diff){
                 result = Math.max(result,diff)

            }
        }
    }
    return result;
}
console.log(findNumber([12, 10, 33, 34], 10));
console.log(findNumber([12, 10, 33, 34], 24));
console.log(findNumber([12, 10, 33, 44], 40));