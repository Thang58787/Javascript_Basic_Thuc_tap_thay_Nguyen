// function findSunday(year){

// }
// findSunday(2022);
for (var year = 2014; year <= 2050; year++) {
    var Today = new Date(year, 0, 1)
    if ( Today.getDay() === 0)
        console.log('this is Sunday ' + year)

}