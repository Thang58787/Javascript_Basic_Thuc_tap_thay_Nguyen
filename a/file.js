let toDay = new Date();
let dd = toDay.getDay();
let ddlist = ['Monday' ,'Tuesday' ,'Wednesday' ,'Thursday' ,'Friday' ,' Saturday' ,'Sunday'];

console.log('Today is : ' + ddlist[dd]);
let h = toDay.getHours();
let m = toDay.getMinutes();
let s = toDay.getSeconds();
let ampm = h >= 12 ? 'PM' : 'AM';
console.log(h + ampm +' : '+ m +' : '+ s)
