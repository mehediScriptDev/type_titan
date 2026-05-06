class BankInfo {
    public readonly name:string;
    public accnmbr: number;
    protected balance: number;

    constructor(name:string, accnmbr:number, balance:number){
        this.name =name;
        this.accnmbr = accnmbr;
        this.balance = balance;
    }

    // adder(amount: number) {
    //     this.balance += amount;
    // }

    set addBalance(amount: number) {
        this.balance += amount;
    }

    get added () {
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

class WifesAccount extends BankInfo{
    public name: string;
    roll: number;
    role: string;

    constructor(name:string, accnmbr:number, balance:number){
        super(name, accnmbr, balance);
        this.name = name;
        this.roll = 0;
        this.role = 'wife';
        this.balance = 33;
    }
}