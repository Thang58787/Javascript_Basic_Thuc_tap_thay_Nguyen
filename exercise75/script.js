function middleElements(array1, array2) {
    let newArray = [];
    newArray.push(array1[1], array2[1]);
    return newArray;
}

console.log(middleElements([1, 2, 3], [1, 5, 6]));
console.log(middleElements([3, 3, 3], [2, 8, 0]));
console.log(middleElements([4, 2, 7], [2, 4, 5])); 