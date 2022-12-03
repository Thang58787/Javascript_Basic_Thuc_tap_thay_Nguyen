function circularArrayRotation(a, k, queries) {
    for (let i = 0; i < k; i++) {
        a.unshift(a.pop());
    }
    return queries.map(query =>{
        return a[query]})
    }
console.log(circularArrayRotation([1,2,3],2,[0,1,2]))