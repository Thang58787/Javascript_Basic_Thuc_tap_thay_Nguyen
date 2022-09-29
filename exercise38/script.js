function isAPlus(totalMarks, isFinalExam) {
    if(totalMarks>=89 && totalMarks<=100 && !isFinalExam)
        return true;
    if(totalMarks>=90 && totalMarks<=100 && isFinalExam)
        return true;
    return false;
}

console.log(isAPlus("78", " "));
console.log(isAPlus("89", "true "));
console.log(isAPlus("99", "true "));