function create_the_dot(vec1, vec2) {
    let sum = 0;

    for (let i = 0; i < 3; i++) {
        sum += vec1[i] * vec2[i]
    }
    return sum;
}
console.log(create_the_dot([1,2,3], [1,2,3]))
console.log(create_the_dot([2,4,6], [2,4,6]))
console.log(create_the_dot([1,1,1], [0,1,-1]))