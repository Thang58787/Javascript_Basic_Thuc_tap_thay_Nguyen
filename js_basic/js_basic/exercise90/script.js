function kthGreatest(arr, num) {
    let result = 0;
    arr.sort((a, b) => b - a);
    for (let i = 0; i < arr.length; i++) {
        if (i == num) {
            result = arr[i - 1]
        }
    }
    return result;

}
console.log(kthGreatest([1,2,6,4,5], 3))
console.log(kthGreatest([-10,-25,-47,-36,0], 1))