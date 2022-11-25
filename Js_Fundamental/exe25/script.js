const result = (a,b) =>a.reduce((acc,x) =>acc.concat(b.map(y =>[x,y])),[])
console.log(result([1, 2], ['a', 'b']));