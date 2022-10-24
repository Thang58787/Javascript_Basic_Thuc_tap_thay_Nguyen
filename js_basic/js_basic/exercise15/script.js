function differenceNumber(number) {
    if (number <= 13) {
        return 13 - number;
    } if (number > 13) {
        return (number - 13) * 2;
    }
}

console.log(differenceNumber(16));