let toDay = new Date()
console.log('Today is: ' + toDay.toLocaleString('en-us', {weekday:'long'}))
let hours = toDay.getHours();
let minutes = toDay.getMinutes();
let seconds = toDay.getSeconds();

if (hours >= '12'){
    hours = hours - 12
    console.log(hours + 'PM' +' : '+ minutes +' : '+ seconds)
}
else{
    console.log(hours + 'AM' +' : '+ minutes +' : '+ seconds)
}

