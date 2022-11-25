const generate_hexadecimal = () =>{
   let n = (Math.random() *  0xfffff *1000000).toString(16);
   console.log(n)
   return '#' + n.slice(0, 6);
}
console.log(generate_hexadecimal())