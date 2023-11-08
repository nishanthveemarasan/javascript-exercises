
## Exercise 1
- Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
 - Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
- Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
- Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them

### Test data
- car 1: 'BMW' going at 120 km/h
- car 2: 'Mercedes' going at 95 km/h

## Exercise 2
- Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
- Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
- Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
- Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.

### Test data
- car 1: 'Ford' going at 120 km/h

## Exercise 3
- Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
current battery charge in % ('charge' property)
- Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'
- Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'
- Create an electric car object and experiment the chaining the 'accelerate',
'brake' and 'chargeBattery' (charge to 90%).! Hint: Review the definiton of polymorphism

### Test data
- car 1: 'Tesla' going at 120 km/h, with a charge of 23%

## Exercise 4
- Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
- Make the 'charge' property private
- Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!

### Test data
- car 1: 'Rivian' going at 120 km/h, with a charge of 23%
