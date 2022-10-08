function setNumber(arr) {
    if ((arr[0] > arr[2])) {
        arr[0] = arr[0];
        arr[1] = arr[0];
        arr[2] = arr[0];
        return [arr[0], arr[1], arr[2]]
    } if ((arr[0] < arr[2])) {
        arr[0] = arr[2];
        arr[1] = arr[2];
        arr[2] = arr[2];
        return [arr[0], arr[1], arr[2]]
    }

}
console.log(setNumber([20, 30, 40]));
console.log(setNumber([-7, -9, 0]));
console.log(setNumber([12, 10, 3]));
