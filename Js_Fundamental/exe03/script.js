const newarr = (data, delimiter = ',',omitFirst =false) =>
data
    .slice(omitFirst ? data.indexOf('\n') +1:0)
    .split('\n')
    .map(v => v.split(delimiter));

console.log(newarr('a,b\nc,d')); 
console.log(newarr('a;b\nc;d', ';')); 