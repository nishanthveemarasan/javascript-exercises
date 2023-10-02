//Exercise 1
const makeCamelCase = (name) => {
    const strSplit = name.toLowerCase().trim().split("_");
    const[first, second] = strSplit;
    return `${first}${second.replace(second[0],second[0].toUpperCase())}`
}
makeCamelCase("underscore_case   ");//underscoreCase
makeCamelCase("first_name");//firstName
makeCamelCase("Some_Variable");//someVariable
makeCamelCase("Calculate_AGE");//calculateAge
makeCamelCase("delayed_departure");//delayedDeparture

//Exercise 2
const flights =
`_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30`;

const getCode = code => code.slice(0,3).toUpperCase();

for(const flight of flights.split("+")){
    const [type,from,to,time] = flight.split(";");
    console.log(`${type.includes("Delayed") ? "WARNING - " : ""} ${type.replaceAll("_"," ").trim()} ${getCode(from)} ${getCode(to)} (${time.replace(":","h")})`);
}

