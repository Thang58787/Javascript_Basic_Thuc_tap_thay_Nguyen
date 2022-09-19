//cách 1
let toDay = new Date()
var day = toDay.getDay();
const daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
];
let hours = toDay.getHours();
let minutes = toDay.getMinutes();
let seconds = toDay.getSeconds();

console.log("Today is: " + daylist[day]);
if (hours >= '12'){
    hours = hours - 12
    console.log(hours + ':'+ minutes +':'+ seconds + ' PM')
}
else{
    console.log(hours +':' + minutes +':'+ seconds + ' AM')
}

// cách 2
console.log('Today is ' + toDay.toLocaleString('en-US', { weekday:'long', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }));