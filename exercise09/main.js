today = new Date();
var cmas = new Date(today.getFullYear(), 11, 25);// cmas to next cmas = 11 month and 25 day

if (today.getMonth()==11 && today.getDate()>25) {//if month=11 day>25 => year +1 
cmas.setFullYear(cmas.getFullYear()+1); 
}  

var one_day = 1000*60*60*24;//miliseconds=24h*60m*60s*1000
var cmasday = Math.ceil((cmas.getTime()-today.getTime())/(one_day))//cmas(miliseconds) - {valua day(miliseconds)"day1/month1 to today"/one_day}=?day"get the smallest integer"

console.log(cmasday + " days left until Christmas!");