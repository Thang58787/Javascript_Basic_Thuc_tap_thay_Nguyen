function checkArray(arr1, arr2) {
    let newarr1 = arr1.sort();
    let newarr2 = arr2.sort();
    if(newarr1[newarr1.length-1]==newarr2[0]){
        return true;
    }
    return false;
}
console.log(checkArray([1,2,3], [3,4,5]));   
console.log(checkArray([1,2,3], [5,6,7]));   
