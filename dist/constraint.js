"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkRules = (value) => value;
checkRules("Hello, world!");
checkRules(33);
const anotherRules = (value) => {
    return {
        name: "mahadi",
        age: 25,
        ...value
    };
};
console.log(anotherRules({ roll: 123 }));
const itachiuchiha = (value) => {
    return {
        clan: "Uchiha",
        brother: "Sasuke",
        ...value
    };
};
const anotherLog = itachiuchiha({ name: "Itachi", idCard: 123456 });
console.log(anotherLog);
const newuser = {
    name: "John Doe",
    year: 300,
    award: false
};
const gotthename = newuser["name"];
const gotyear = newuser["year"];
const awardgot = newuser["award"];
const sajeeb = {
    name: "sajeeb the chotovai",
    salary: 300,
    experience: 5
};
const sajeebremarmu = (obj, key) => {
    return obj[key];
};
const firstTry = sajeebremarmu({ name: "ashik", salary: 200, experience: 2 }, "experience");
console.log(firstTry);
//# sourceMappingURL=constraint.js.map