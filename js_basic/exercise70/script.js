function rotateElements(arr) {
    return [arr[1], arr[2], arr[0]];
}
console.log(rotateElements([3, 4, 5]));  
console.log(rotateElements([0, -1, 2]));  
console.log(rotateElements([7, 6, 5])); 
//
// function rotateElements(array, stepsToShift) {

//     for (var i = 0; i < stepsToShift; i++) {
//         array.shift(array.push());
//     }

//     return array;
// }
// console.log(rotateElements([3, 4, 5],1));  
// console.log(rotateElements([0, -1, 2],1));  
// console.log(rotateElements([7, 6, 5],1)); 