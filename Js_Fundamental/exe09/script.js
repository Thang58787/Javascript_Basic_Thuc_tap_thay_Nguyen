const result = arr => arr.reduce((a,v)=>a.concat(a.map(r=>[v].concat(r))),[[]])
console.log(result([1, 2]))