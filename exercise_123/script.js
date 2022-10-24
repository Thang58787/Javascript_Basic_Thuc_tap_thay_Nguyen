function checkArray (input_arr, n) {
    for (var i = 0; i < n; i++) {
        if (input_arr.indexOf(i + 1) == -1) 
          return false;
    }
    return true;
}
console.log(checkArray([1, 2, 3, 4, 5], 5));
console.log(checkArray([1, 2, 3, 5], 5));