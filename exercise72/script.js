function firstLastSame(array) {
    if(array[0] === array[array.length - 1])
        return true;
    return false;
}

console.log(firstLastSame([10, 20, 30])); 
console.log(firstLastSame([10, 20, 30, 10])); 
console.log(firstLastSame([20, 20, 20])); 