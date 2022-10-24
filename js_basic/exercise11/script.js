function convertTemperaturesofC(f) {
    let c = (5 * (f - 32)) / 9;
    console.log('nhiet do la :' + c + ' độ C');
}

function convertTemperaturesofF(c) {
    let f = (9 * c / 5) + 32;
    console.log('nhiet do la :' + f + ' độ F');

}
convertTemperaturesofC(140);
convertTemperaturesofF(60);