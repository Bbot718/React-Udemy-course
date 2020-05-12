//declaring a class
class Human {   //Parent class
    constructor() {
        //constructur gives default properties and methods to class
        this.gender = 'male';
    }

    //Mehod
    printMyGender(){
        console.log()
    }
}

//declaring a class that inherits class 'Human', its methods and its properties 
class Person extends Human{ //Child class
     
    constructor(){
        super(); //Line to execute the parents constructor  (Huan constructur)
       this.name = 'Ben';
    }

    //Method
    printMyName(){
        console.log(this.name);
    }
}

//Instance of class person
const person = new Person();

person.printMyName();
person.printMyGender();