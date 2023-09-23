//--- Part - 01 ---
const calculateBMI = (mass , height) => {
    return mass / height ** height;
}
let markBMI = calculateBMI(78,1.69);
let johnkBMI = calculateBMI(95,1.88);

let markHigherBMI = markBMI > johnkBMI ? true : false;

if(markBMI > johnkBMI){
    console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnkBMI})`)
}else{
    console.log(`John's BMI(${johnkBMI}) is higher than Mark's(${markBMI})`)
}

//--- Part - 02 ---
const mark = {
    name:"Mark",
    mass:78,
    height:1.69,
    calcBMI:function(){
        this.BMI = calculateBMI(this.mass,this.height)
        return this.BMI
    }
}

const john = {
    name:"John",
    mass:95,
    height:1.88,
    calcBMI:function(){
        this.BMI = calculateBMI(this.mass,this.height)
        return this.BMI
    }
}

mark.calcBMI();
john.calcBMI();

console.log(mark.BMI, john.BMI);
if(mark.BMI > john.BMI){
    console.log(`${mark.name}'s BMI(${mark.BMI}) is higher than ${john.name}'s(${john.BMI})`)
}else{
    console.log(`${john.name}'s BMI(${john.BMI}) is higher than ${mark.name}'s(${mark.BMI})`)
}


