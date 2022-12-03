function jumpingOnClouds(c, k) {
    let energy = 100;
    var count = 0;
    let index;
    while (index !== 0 && energy >= 0) {
      
    if( count === 0){ index = 0};
    console.log("count", count)
    console.log("index", index)
    index = (index + k) % c.length;
      energy = c[index] > 0 ? energy - 3 : energy - 1;
      count++;
    }
  
    return energy;
}
console.log(jumpingOnClouds([1 ,1 ,1 ,0 ,1 ,1 ,0 ,0 ,0 ,0],3))


