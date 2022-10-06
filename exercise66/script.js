function cityName(str) {
    if (/^New|^Los/.test(str))
        return str;
    return "";
}

console.log(cityName("New York"));
console.log(cityName("Los Angeles"));
console.log(cityName("London"));