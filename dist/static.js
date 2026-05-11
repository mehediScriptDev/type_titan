"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Counter {
    static count = 0;
    increament() {
        ;
        return (Counter.count = Counter.count + 1);
    }
    decreament() {
        return (Counter.count = Counter.count - 1);
    }
}
const tryone = new Counter();
tryone.decreament();
tryone.decreament();
tryone.decreament();
tryone.decreament();
tryone.decreament();
console.log(tryone.decreament());
const trynew = new Counter();
trynew.decreament();
trynew.decreament();
trynew.decreament();
trynew.decreament();
trynew.decreament();
trynew.decreament();
console.log(trynew.decreament());
// console.log(tryone.count);
//# sourceMappingURL=static.js.map