// filter method
const jobs=[{ id:1, isActive:true },
            { id:2, isActive:true},
            { id:3, isActive:false}];

const activeJobs = jobs.filter(job=>{
    return job.isActive ;
});
console.log(activeJobs);

const deactiveJobs = jobs.filter(function(job){
    return !job.isActive ;
});
console.log(deactiveJobs);

// arrow function

const square = (number) => number*number ;

console.log(square(5));

//method2 
const sq = function(number){
             return number*number 
           };

console.log(sq(7));

// this inside callback 

const person  = {
    talk(){
        setTimeout(function(){
            console.log("this",this);
        },1000);
    }
}

//console.log(person.talk());

//map method

const colors = ['red','green','blue'];

const items = colors.map((color)=>{
    return `<li>${color}</li>` ;
});

console.log(items);

//spread operator

const first = [1,2,3];
const second = [4,5,6];

const combined = first.concat(second);
const combinedSpread = [...first,'a',...second,'b'];

console.log(combinedSpread);

const clone = [...first];
console.log(clone);

// spread operator with objects

const obj1 = {name:'Varsha'};
const obj2 = {job:'Software Development Engineer 2'};

const objUsingSpread = {...obj1, ...obj2, location:"Pune", company:"Microsoft"};
console.log(objUsingSpread);

// class 

class Person {
    constructor(name){
        this.name = name ;
    }

    walk(){
        console.log('walk');
    }
}

const p = new Person('Varsha');
console.log(p);
