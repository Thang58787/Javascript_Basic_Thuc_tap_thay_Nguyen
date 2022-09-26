for (let year = 2014; year <= 2050; year++) {
    let day = new Date(year, 0, 1); // 1/1/year
    const dayOfWeek = day.getDay(); // 0->6 (0 is Sunday)
    if(dayOfWeek === 0)
        console.log("1st January is being a Sunday " + year);
}
