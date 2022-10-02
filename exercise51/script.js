function timeConvert(num) {
    let hour = Math.floor(num / 60);
    let minute = num % 60;
    return `${hour}:${minute}`;
}

console.log(timeConvert(71));
console.log(timeConvert(450));
console.log(timeConvert(1441));