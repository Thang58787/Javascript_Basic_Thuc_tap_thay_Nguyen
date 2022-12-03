function jumpingOnClouds(c, k) {
    for (let j = 0; j < k-1; ++j) {
        c.push(c[j]);
    }

    let energy = 100;
    //let n = c.length
    for (let i = k; i < c.length; i = i + k) {
        energy = c[i] == 1 ? energy - 3 : energy - 1;
    }
    return energy
}
console.log(jumpingOnClouds([1 ,1 ,1 ,0 ,1 ,1 ,0 ,0 ,0 ,0], 3))
