const print = (arr1,arr2) => {
    const set = new Set(arr1)
    arr2.forEach(element => {
        set.add(element)
    });
    return set
}
console.log(print([1, 2, 3, 4], [1, 2, 3, 4, 5]))