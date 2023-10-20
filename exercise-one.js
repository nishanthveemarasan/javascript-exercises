const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    answers: [0,0,0,0],
    registerNewAnswer(){
        const answer = prompt(`${this.question}\n${this.options.join("\n")}\n(Write option number)`);
        typeof +answer === "number" && +answer <= 3 && +answer >= 0 && this.answers[+answer]++
        console.log(this.answers);
    },
    displayResult(type){
        if(type === "array"){
            console.log(this.answers);
        }else if(type === "string"){
            console.log(`Poll results are ${this.answers.join(",")}`);
        }
    }
  }


console.log(poll.registerNewAnswer())
console.log(poll.displayResult('string'))
console.log(poll.registerNewAnswer())
console.log(poll.displayResult('array'))
console.log(poll.registerNewAnswer())
console.log(poll.displayResult('string'))
console.log(poll.registerNewAnswer())
console.log(poll.displayResult('array'))
console.log(poll.registerNewAnswer())
console.log(poll.displayResult('string'))
console.log(poll.registerNewAnswer())
console.log(poll.displayResult('array'))

//Using Testdata
const arr1 = [5, 2, 3];
const arr2 = [1, 5, 3, 9, 6, 1]

//Using call method;
const displayResult = poll.displayResult;

console.log(displayResult.call({answers:arr1},"array"));
console.log(displayResult.call({answers:arr2},"array"));

//Using apply method;
console.log(displayResult.apply({answers:arr1},["string"]));
console.log(displayResult.apply({answers:arr2},["string"]));

//Using bind method
const arrOneResult = displayResult.bind({answers:arr1})
const arrTwoResult = displayResult.bind({answers:arr2})

console.log(arrOneResult('string'));
console.log(arrTwoResult('string'));
