function checkCity (str){
    let letter = str.slice(0,3);
    if(letter==='Los'||letter==='New'){
        return str;
    }
    return '';
}
console.log(checkCity("New York"));
console.log(checkCity("Los Angeles"));
console.log(checkCity("London"));