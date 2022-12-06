function jumpingOnClouds(c) {
    // Write your code here
    var count = 0;
    for (let i = 0; i < c.length-1;) {
        if (c[i + 2] === 0) {
            i += 2;
        } else {
            i += 1;
        }
        count++
    }
    return count ;
}
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]))
  