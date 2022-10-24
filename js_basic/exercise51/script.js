function convertnumber (num){
    let hour = Math.floor(num/60);
    if(hour<10){
        hour = '0' + hour;
    }
    let minutes = num % 60;
    if(minutes<10){
        minutes = '0' + minutes;
    }
    return `${hour} : ${minutes}`;
}
console.log(convertnumber('45'))
console.log(convertnumber('481'))
