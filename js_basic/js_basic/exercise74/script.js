function setNumber(arr) {
    let max = Math.max(arr[0], arr[arr.length - 1]);
   return[arr[0]=max, arr[1]=max, arr[2]=max]

}
console.log(setNumber([20, 30, 40]));
console.log(setNumber([-7, -9, 0]));
console.log(setNumber([12, 10, 3]));
