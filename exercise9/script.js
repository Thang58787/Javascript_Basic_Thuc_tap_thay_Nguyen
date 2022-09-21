const today = new Date();
const year = today.getFullYear();

// If the next Christmas is in the next year
if(today.getMonth() === 11 && today.getDate > 25) {
    year++;
} 

const christmas = new Date(year, 11, 25); // 25/12/year
const oneDay = 24*60*60*1000; // number of miliseconds per day

// days left before next Christmas
const interval = Math.ceil((christmas.getTime() - today.getTime())/oneDay);
console.log(interval);

