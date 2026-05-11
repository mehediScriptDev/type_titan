"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculation = {
    name: "Mehedi",
    age: 25,
    skills: ["TypeScript", "JavaScript"],
    salary: 50000,
    smartWatch: 123456,
    farm: {
        name: "Alice",
        age: 30
    }
};
const farmCalculation = {
    name: "Fiverr",
    age: 30,
    skills: ["Python", "Django"],
    salary: 60000,
    smartWatch: 789012
};
const miavai = (value) => value;
miavai("Hello, world!");
const arevai = (value) => value;
arevai("Hello, world!");
arevai(33);
arevai({ id: 1, name: "Alice" });
const studentIcno = (value) => {
    return {
        id: 33,
        ...value
    };
};
console.log(studentIcno({ idd: 44, Name: "oi kire" }));
//# sourceMappingURL=gnericsWithINte.js.map