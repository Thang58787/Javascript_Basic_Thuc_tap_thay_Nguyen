let today = new Date();
let dd = today.getDate(); // 1->31
let mm = today.getMonth() + 1; // 0->11 + 1
let yyyy = today.getFullYear(); // current year

if(dd < 10) {
    dd = '0' + dd;
}
if(mm < 10) {
    mm = '0' + mm;
}


console.log(mm + "-" + dd + "-" + yyyy);
console.log(dd + "/" + mm + "/" + yyyy);
console.log(dd + "-" + mm + "-" + yyyy);
console.log(dd + "/" + mm + "/" + yyyy);
