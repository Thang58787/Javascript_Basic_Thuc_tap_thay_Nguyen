
const pull =(arr,...args) =>{
    let argState = Array.isArray(args) ? args : 0;
    let pulled = arr.filter((v,i) =>!argState.includes(v));
    pulled.forEach(v=>arr.push(v));
    console.log(argState)
    
}
let arra1 = ['a', 'b', 'c', 'a', 'b', 'c'];
  console.log(pull(arra1, 'a', 'c'));