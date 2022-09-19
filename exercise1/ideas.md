# 1. Display curent day and time
**Created:** 19-09-2022  10:43

----
## Problem
Write a JavaScript program to display the current day and time in the following format. 
[Go to the editor](https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php#EDITOR)  
_Sample Output :_ Today is : Tuesday.  
Current time is : 10 PM : 30 : 38  
[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php) 

## Solution
Vì output theo đề bài hơi xấu, nên mình chỉnh lại format một chút
Output:
```
Today is: Monday
script.js:28 Current Time: 10:35:16 AM 
```

Nháp
![](https://i.imgur.com/AnnozuW.png)


File script.js:
```js
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

```

