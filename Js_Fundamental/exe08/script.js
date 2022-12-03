function myFunction(a, b){
return a.hasOwnProperty(b)
}
console.log(myFunction({x:'a',y:null,z:'c'},'y'))