const  filter_Out = (arr) => 
    arr.filter(e => ( arr.indexOf(e) === arr.lastIndexOf(e)));
console.log(filter_Out([1, 2, 2, 3, 4, 4, 5]));  
console.log(filter_Out([1, 2, 3, 4]));  