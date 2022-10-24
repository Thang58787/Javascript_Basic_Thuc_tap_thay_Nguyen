let toDay = new Date();
let day = toDay.getDate();
let month = toDay.getMonth() + 1;
let year = toDay.getFullYear()
if (day < 10) {
    day = '0' + day;
}

if (month < 10) {
    month = '0' + month;
}
console.log(month + '-' + day + '-' + year);
console.log(month + '/' + day + '/' + year);
console.log(day + '-' + month + '-' + year);
console.log(day + '/' + month + '/' + year);



