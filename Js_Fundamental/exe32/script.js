const totalsum = (obj,fn) => obj.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc,curr) => acc+ curr ,0 );

console.log(totalsum([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n));
