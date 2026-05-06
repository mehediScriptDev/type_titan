class Person {
 name: string;
    age: number;
    grade:string;

    constructor(name: string, age: number, grade: string) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}

class Student extends Person {
   

    constructor (name: string, age: number, grade: string) {
        super(name,age,grade);
        this.name =name;
        this.age = age;
        this.grade = grade;
    }

    sleep(ok:string){
        console.log(` ${this.name} ${ok} is sleeping`);
        
    }
}
class BadStudent {
    name: string;
    roll:number;
    age:number;
    grade: string;

    constructor(name: string, roll: number, age: number, grade: string) {
        this.name = name;
        this.roll = roll;
        this.age = age;
        this.grade = grade;
    }
    sleep(ok:string){
        console.log(` ${this.name} ${ok} is sleeping`);
    }
}

// const nidubuttu = new Student("Nidu Buttu", 20, "A");
// nidubuttu.sleep("quietly");