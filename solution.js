// Exercise 1
const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed}km/h`)
}

Car.prototype.break = function(){
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}km/h`)
    return this;
}

const car1 = new Car("BMW",120);
const car2 = new Car("Mercedes",95);

//car 1
car1.accelerate()
car1.break()
car1.accelerate()
car1.break()
car1.accelerate()
car1.accelerate()
car1.break()
car1.break()

//car 2
car2.accelerate()
car2.break()
car2.accelerate()
car2.accelerate()
car2.break()
car2.accelerate()
car2.break()
car2.break()

//Exercise 2
class CarCl{
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }
    accelerate(){
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed}km/h`)
    }
    break(){
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed}km/h`)
        return this;
    }

    set speedUS(speed){
        this.speed = speed * 1.6
    }

    get speedUS(){
        return this.speed / 1.6;
    }
}

const ford = new CarCl("Ford",120);
ford.accelerate();
ford.accelerate();
ford.break();
ford.speedUS = 140;
ford.accelerate();
ford.accelerate();
ford.break();

//Exercise 3
const EV = function(make, speed, charge){
    Car.call(this,make,speed);
    this.charge = charge
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo
    return `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`
}

EV.prototype.accelerate = function(){
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}`)
    return this;
}

const tesla = new EV('Tesla',120,23);
console.log(tesla.chargeBattery(25));
tesla.accelerate();
console.log(tesla.accelerate().break().chargeBattery(26));

//Exercise 4
class EVCl extends CarCl{
    constructor(make, speed, charge){
        super(make, speed);
        this.charge = charge;
    }
    chargeBattery(chargeTo){
        this.charge = chargeTo
        return `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`
    }
    accelerate(){
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}`)
        return this;
    }
}

const rivian = new EVCl('Rivian',120,23);
console.log(rivian.accelerate().break().chargeBattery(26));
