// Đây là bài 41, không phải bài 40
function checkNumber(a, b, c) {
    // Khi biết trong if chắc chắn có 1 lệnh thì không nên dùng ngoặc nhọn
    if (a == b && a == c && b == c)
        return 30;
    if (a == b || a == c || b == c)
        return 40;
    return 20;
}

console.log(checkNumber(20, 10, 20));
console.log(checkNumber(20, 20, 20));
console.log(checkNumber(20, 21, 22));


