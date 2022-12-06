function cutTheSticks(arr) {
    // Write your code here
    var result = [];
    while (arr.length >0){
        result.push(arr.length);
        let min = Math.min(...arr);
        arr = arr.map(num => num-min).filter(item =>item > 0);
    }
    return result
}
console.log(cutTheSticks([5, 4, 4, 2, 2, 8]))