//EXERCISE 1

const dogsJulia =  [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3]

//1
// const copyDogsJulia = dogsJulia.slice();
const copyDogsJulia = [...dogsJulia];
//copyDogsJulia.splice(0,1);
copyDogsJulia.shift();
copyDogsJulia.splice(-2);
console.log(copyDogsJulia);

//2
const checkDogs = (dogsJulia,dogsKate) => {
    //const allData = dogsJulia.concat(dogsKate);
    const allData = [...dogsJulia,...dogsKate];
    allData.forEach((age, index) => {
        if(age >= 3){
            console.log(`Dog number ${index} is an adult, and ${age} years old`);
        }else{
            console.log(`Dog number ${index} is still a puppy`);
        }
    });
}

checkDogs(copyDogsJulia, dogsKate);

//EXERCISE 2
const dogAges = [5, 2, 4, 1, 15, 8, 3];

calcAverageHumanAge = (dogAges) => {
    const humanAges = dogAges.map(age => age <=2 ? age * 2 : 16 + age * 4)
                            .filter(humanAge => humanAge >= 18)
    return humanAges;
}

const humanAges = calcAverageHumanAge(dogAges);
console.log(humanAges);


//EXERCISE 3

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];
//1
dogs.map((dog) => {
    dog.recommendedFood = Math.trunc((dog.weight ** 0.75)*28)
})
console.log(dogs);

//2
const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(`Sarah's dag is eating too ${sarahDog.curFood > sarahDog.recommendedFood ? "much" : "less"}`);

//3
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood);
const ownersEatTooLess = dogs.filter(dog => dog.curFood < dog.recommendedFood);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLess);

//4
const ownersOfEatTooMuch = ownersEatTooMuch.flatMap((data) => data.owners)
console.log(`${ownersOfEatTooMuch.join(' and ')}'s dogs eating too much`)
const ownersOfEatTooLess = ownersEatTooLess.flatMap((data) => data.owners)
console.log(`${ownersOfEatTooLess.join(' and ')}'s dogs eating too less`)

//5
const dogEatRecommendedFood = dogs.some((dog) => dog.recommendedFood == dog.curFood);
console.log(dogEatRecommendedFood);

//6
const checkEatingOkay = (dog) => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood *1.1;
const dogEatOkayFood = dogs.some(checkEatingOkay);
console.log(dogEatOkayFood);

//7
const dogEatOkayFoodArray = dogs.filter(checkEatingOkay);
console.log(dogEatOkayFoodArray);

//8
const copyDogsArray = dogs.slice();

copyDogsArray.sort((a,b) => a.recommendedFood < b.recommendedFood ? -1 : +1)
console.log(copyDogsArray);
