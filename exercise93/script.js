function findmaximalDifference (arr){
    let result = 0;
    let temp
    for(let i =0;i<arr.length;i++){
        for (let j = i; j < arr.length-1; j++) {
            temp = Math.abs(arr[i] - arr[j + 1]);
            result = Math.max(temp, result);
        }

    }
    return result
}
console.log(findmaximalDifference([1, 2, 3, 8, 9]))
console.log(findmaximalDifference([1, 2, 3, 18, 9]))
console.log(findmaximalDifference([13, 2, 3, 8, 9]))