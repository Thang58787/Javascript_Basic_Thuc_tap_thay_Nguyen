function abCheck(str)
 {
    return (/a...b/).test(str) || (/b...a/).test(str);
 }

console.log(abCheck("Chainsbreak"));
console.log(abCheck("pane borrowed"));
console.log(abCheck("abCheck"));
