
for (let year = 2014; year <= 2050; year++) {
    let Today = new Date(year, 0, 1)
    if (Today.getDay() === 0)
        console.log('this is Sunday ' + year)

}