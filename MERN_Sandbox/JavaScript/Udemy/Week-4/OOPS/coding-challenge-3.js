///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. 
   Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// *************** Solution 1 | ES6 Class ******************

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
  constructor(make, speed, charge) {
    super(make, speed); // Call the superclass constructor
    this.charge = charge;
  }

  chargeBattery(chargeTo) {
    this.charge = chargeTo;
  }

  accelerate() {
    this.speed += 20;
    this.charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
  }
}

const audi = new EVCl('audi', 120, 40);
audi.chargeBattery(90);
console.log(audi);
audi.brake();
audi.accelerate();

/** 
 * Output
 * {
    "make": "Tesla",
    "speed": 130,
    "charge": 89
}

Tesla is going at 110 km/h
Tesla is going at 130 km/h, with a charge of 89
 * 
 */

// *********** Solution 2 | Constructor Function ***********
const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

car.prototype.brake = function () {
  this.speed -= 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes (parent child relation)
EV.prototype = Object.create(car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 40);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

/** 
 * Output
 * {
    "make": "Tesla",
    "speed": 130,
    "charge": 89
}

Tesla is going at 110 km/h
Tesla is going at 130 km/h, with a charge of 89
 * 
 */
