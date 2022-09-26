var today = new Date(); // current time
var day = today.getDay(); // 0-6
var daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
];
console.log("Today is: " + daylist[day]);

var hour = today.getHours(); // 0-23
var minute = today.getMinutes(); // 0-59
var second = today.getSeconds(); // 0-59
var prepand = hour >= 12 ? "PM " : "AM "; // AM:0-11, PM: 12-23
hour = hour >= 12 ? hour - 12 : hour; // keep AM hours, change PM hours: 0-11
// midday 12 PM
if (hour === 0 && prepand === "PM ") {
    hour = 12;
    prepand = "PM";
}
// midnight 12 AM
if (hour === 0 && prepand === " AM ") {
    hour = 12;
    prepand = "AM";
}

// output
console.log(
    "Current Time: " + hour + ":" + minute + ":" + second + " " + prepand
);
