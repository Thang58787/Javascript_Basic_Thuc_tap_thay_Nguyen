function cToF() {
    let cTemp = document.getElementById("cTemp");
    let fTemp = document.getElementById("fTemp");

    fTemp.value = cTemp.value * (9 / 5) + 32;
}

function fToC() {
    let cTemp = document.getElementById("cTemp");
    let fTemp = document.getElementById("fTemp");
    cTemp.value = (fTemp.value - 32) * (5 / 9);
    
}
