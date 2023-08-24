// Assignment 1: Array Operations

// 1. Create an empty array called "fruits 
let fruits = [] ;

// 2.  Add the following fruits to the "fruits" array: "apple", 
// "banana", "orange".
fruits[0] = "apple";
fruits[1] = "banana";
fruits[2] = "orange";

// 3. Remove the first fruit from the array.
fruits.splice(0,1);

// 4. Add "grape" to the end of the array.
fruits.push("grape");

// 5. Update the second fruit in the array to "pear".
fruits[1] = "pear";

// 6. Print the final "fruits" array after performing the above 
// operations.
console.log(fruits);

//Assignment 2: Object Operations

// 1. Create an empty object called "person".
let person = {};

//  2. Add the following properties to the "person" object:
// - name: "John"
// - age: 30
// - city: "New York"
person['name'] = "John";
person["age"] = 30;
person.city = "New York";

// 3. Remove the "age" property from the "person" object.
delete person.age ;

// 4. Add a new property called "job" with the value "Engineer" 
// to the "person" object.
person.job = "Engineer";

// 5. Update the "city" property of the "person" object to 
// "San Francisco".
person["city"] = "San Francisco";

// 6. Print the final "person" object after performing the above 
// operations.
console.log(person);

// Assignment 3: Array of Objects Operations
// 1. Create an empty array called "cars".
let cars = [] ;

// 2. Add three car objects to the "cars" array. Each car object 
// should have the following properties:
//    - make: "Toyota"
//    - model: "Camry"
//    - year: 2018
let car1 = {
    make:"Jagaur",
    model:"Sedan",
    year:2023
}

let car2 = {
    make:"BMW",
    model:"BMW M2",
    year:2022
}

let car3 = {
    make:"Audi",
    model:"hatchback",
    year:2021
}

cars.push(car1);
cars.push(car2);
cars.push(car3);

console.log(cars);

// 3. Remove the first car object from the "cars" array.
cars.splice(0,1);
console.log(cars);

// 4. Add a new car object to the "cars" array with the following 
// properties:
//    - make: "Honda"
//    - model: "Civic"
//    - year: 2020
cars.push({
    make: "Honda",
    model: "Civic",
    year: 2020
});
console.log(cars);

// 5. Update the "model" property of the second car object in the array 
// to "Accord".
cars[1]["model"] = "Accord";

// 6. Print the final "cars" array after performing the above operations.
console.log(cars);



