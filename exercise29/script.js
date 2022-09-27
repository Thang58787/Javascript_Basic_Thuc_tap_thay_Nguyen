function checkThreeNumbers(num1, num2, num3) {
    if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99) || (num3 >= 50 && num3 <= 99))
        return true;
    return false;
}

console.log(checkThreeNumbers(50, 90, 99));
console.log(checkThreeNumbers(5, 9, 199));
console.log(checkThreeNumbers(65, 89, 199));
console.log(checkThreeNumbers(65, 9, 199));