//------Part - 1----------
const calcAvg = (score1,score2,score3) => {
    return (score1+score2+score3)/3
}

let dolphinScoreAvg = calcAvg(96 , 108 , 89);
let koalasScoreAvg = calcAvg(88 , 91 , 110); 

if(dolphinScoreAvg > koalasScoreAvg){
    console.log("This match is draw");
}else if(dolphinScoreAvg == koalasScoreAvg){
    console.log("Dolphins win the trophy");
}else if(dolphinScoreAvg > koalasScoreAvg){
    console.log("Dolphins win the trophy");
}

//------Part - 2----------
if(dolphinScoreAvg > koalasScoreAvg && dolphinScoreAvg>= 100){
    console.log("Dolphins win the trophy");
}else if(koalasScoreAvg > dolphinScoreAvg && koalasScoreAvg>= 100){
    console.log("Koalas win the trophy");
}else if(dolphinScoreAvg == koalasScoreAvg && dolphinScoreAvg >= 100 && koalasScoreAvg>= 100){
    console.log("Dolphins win the trophy");
}else{
console.log("none of the team win the match");
}

