import person from './person';

export default class Teacher extends person{
    constructor(name, degree){
        super();
        this.degree = degree;
    }

    teach(){
        console.log("teach");
    }
}