"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankInfo {
    name;
    accnmbr;
    balance;
    constructor(name, accnmbr, balance) {
        this.name = name;
        this.accnmbr = accnmbr;
        this.balance = balance;
    }
    // adder(amount: number) {
    //     this.balance += amount;
    // }
    set addBalance(amount) {
        this.balance += amount;
    }
    get added() {
        return this.balance;
    }
}
// class WifesAccount extends BankInfo{
//     constructor(name:string, accnmbr:number, balance:number){
//         super(name, accnmbr, balance);
//     }
// }
const checking = new BankInfo("Alice", 123456, 1000);
checking.addBalance = 5000;
console.log(checking.added);
// checking.balance
// console.log(checking.balance);
// checking.name = 'Bob'; // This will cause an error since name is readonly
// 
class WifesAccount extends BankInfo {
    name;
    roll;
    role;
    constructor(name, accnmbr, balance) {
        super(name, accnmbr, balance);
        this.name = name;
        this.roll = 0;
        this.role = 'wife';
        this.balance = 33;
    }
}
//# sourceMappingURL=getset.js.map