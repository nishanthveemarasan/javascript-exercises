
# Excercise 1
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.

- Create a method called ``registerNewAnswer`` on the ``poll`` object. The
method does 2 things:
  - Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
  What is your favourite programming language?
    - 0: JavaScript
    - 1: Python
    - 2: Rust
    - 3: C++
    (Write option number)
  - Based on the input number, update the ``answers`` array property. For example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)
- Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
- Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
- Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

## Test data for bonus:
  - Data 1: [5, 2, 3]
  - Data 2: [1, 5, 3, 9, 6, 1]

## poll object
```
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"]
  answers: [0,0,0,0],
};
```