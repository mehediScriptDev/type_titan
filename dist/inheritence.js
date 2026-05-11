"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    grade;
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age, grade);
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    sleep(ok) {
        console.log(` ${this.name} ${ok} is sleeping`);
    }
}
class BadStudent {
    name;
    roll;
    age;
    grade;
    constructor(name, roll, age, grade) {
        this.name = name;
        this.roll = roll;
        this.age = age;
        this.grade = grade;
    }
    sleep(ok) {
        console.log(` ${this.name} ${ok} is sleeping`);
    }
}
// const nidubuttu = new Student("Nidu Buttu", 20, "A");
// nidubuttu.sleep("quietly");
//# sourceMappingURL=inheritence.js.map