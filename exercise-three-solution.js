//------Part - 1----------

const calcTips = (bill) => {
    let tip = (bill >= 50 && bill <= 300) ? bill*0.15 : bill*0.2;
    return tip;
}

let bill = 275;
let tip = calcTips(bill);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

//------Part - 2----------

const bills = [125,555,44];
let tips = [];
let totals = [];
for(let i=0;i< bills.length;i++){
    let tip = calcTips(bills[i]);
    tips.push(tip);
    let total = bills[i]+tip;
    totals.push(total);
}

console.log(totals);