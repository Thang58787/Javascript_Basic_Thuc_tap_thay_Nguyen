function angryProfessor(k, a) {
    let temp = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            temp++;
        }
    }
    if (temp >= k) { return "NO" }
    return "YES";
}
console.log(angryProfessor(4, [-93, -86, 49, -62, -90, -63, 40, 72, 11, 67]))



