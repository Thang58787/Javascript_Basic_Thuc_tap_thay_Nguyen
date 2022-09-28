function near100(num1, num2) {
    if (Math.abs(100 - num1) < Math.abs(100 - num2))
        return num1;
    else if (Math.abs(100 - num1) > Math.abs(100 - num2))
        return num2;
    else
        return false;
}

console.log(near100(90, 89));
console.log(near100(-90, -89));
console.log(near100(90, 90));