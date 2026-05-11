"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum = (a, b) => {
    return a + b;
};
const result = sum(5, 3);
console.log(result);
const anothersum = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
};
anothersum(5, "3");
const getChecked = (user) => {
    if ("role" in user) {
        console.log("this is admin");
    }
    else {
        console.log("this is user");
    }
};
getChecked({ name: "Alice", role: "admin" });
getChecked({ name: "Bob" });
//# sourceMappingURL=typegurd.js.map