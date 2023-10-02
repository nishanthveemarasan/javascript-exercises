# Excercise 1
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

## Test data (pasted to textarea, including spaces):
- underscore_case
- first_name
- Some_Variable
- calculate_AGE
- delayed_departure

## Should produce this output 
- underscoreCase 
- firstName 
- someVariable 
- calculateAge
- delayedDeparture 

# Exercise 2
## Test data
```
const flights ='_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
  ```
## Should produce this output 
- WARNING -  Delayed Departure FAO TXL (11h25)
- Arrival BRU FAO (11h45)
- WARNING -  Delayed Arrival HEL FAO (12h05)
- Departure FAO LIS (12h30)