function allMax(array) {
    let max = Math.max(array[0], array[array.length - 1]);
    for (let i = 0; i < array.length; i++)
        array[i] = max;
    return array;
}

console.log(allMax([20, 30, 40]));
console.log(allMax([-7, -9, 0]));
console.log(allMax([12, 10, 3]));