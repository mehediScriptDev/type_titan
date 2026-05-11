"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Testing {
    name;
    roll;
    role;
    constructor(name, roll, role) {
        this.name = name;
        this.roll = roll;
        this.role = role;
    }
    finalResult() {
        console.log(`${this.name} is name`);
    }
}
class SecondTesting extends Testing {
    constructor(name, roll, role) {
        super(name, roll, role);
    }
    faildTest(typess) {
        console.log(`khali fail kore ${typess}`);
    }
}
class FinalTesting extends Testing {
    constructor(name, roll, role) {
        super(name, roll, role);
    }
    passTest(typess) {
        console.log(`khali pass ${typess}`);
    }
}
const letsTest = new FinalTesting("Alice", 123, "Student");
const letsTestAgain = new SecondTesting("Bob", 456, "Teacher");
const isUser = (user) => {
    return user instanceof FinalTesting;
};
const isAdmin = (user) => {
    return user instanceof SecondTesting;
};
const finalOne = (user) => {
    if (isUser(user)) {
        user.passTest("final test");
    }
    else if (isAdmin(user)) {
        user.faildTest("second test");
    }
};
//# sourceMappingURL=another.js.map