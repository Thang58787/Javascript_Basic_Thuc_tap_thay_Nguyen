
function equalizeArray(arr) {
    // Write your code here
    const arrCopy = [...new Set(arr)];
    const counts = [];

    arrCopy.forEach((e) => {
        const c = arr.filter((a) => a === e).length;
        counts.push(c)
    })

    counts.sort((a, b) => b - a);
    counts.shift();
    const minDeletions = counts.reduce((acc, e) => e + acc, 0);
    
    return minDeletions;
}
console.log(equalizeArray([3, 3, 2, 1, 3]))