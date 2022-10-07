function firstLast1(array) {
    if(array.length < 1)
        return false;
    const end = array.length - 1;
    if(array[0] === 1 || array[end] === 1) 
        return true;
    return false;
}

console.log(firstLast1([1, 3, 5]));
console.log(firstLast1([1, 3, 5, 1]));
console.log(firstLast1([2, 4, 6]));