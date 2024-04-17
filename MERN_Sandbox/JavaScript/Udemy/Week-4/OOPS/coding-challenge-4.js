///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  //private property : not accessible outside of class
  #charge;

  constructor(make, speed, charge) {
    super(make, speed); // Call the superclass constructor
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    this.#brake();
    return this;
  }

  //private method : not accessible outside of class
  #brake() {
    this.speed -= 11;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const audi = new EVCl('audi', 120, 22);
audi.accelerate().chargeBattery(10).accelerate();
console.log(audi);

/**
 * make: "audi"
   speed: 149
   #charge: 9
   speedUS: (...)
   [[Prototype]] : CarCl
   accelerate : ƒ accelerate()
   chargeBattery : ƒ chargeBattery(chargeTo)
   constructor : class EVCl
   speedUS : (...)
 */

//console.log(audi.brake()); // undefined
//console.log(audi.#brake());
//console.log(audi.#charge);
//Property '#charge' is not accessible outside class
// 'EVCl' because it has a private identifier.
