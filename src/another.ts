class Testing {
    name:string;
    roll:number;
    role:string;

    constructor(name:string, roll:number, role:string){
        this.name = name;
        this.roll = roll;
        this.role = role;
    }

    finalResult(){
        console.log(`${this.name} is name`);
        
    }
}

class SecondTesting extends Testing{
    constructor(name:string, roll:number, role:string){
        super(name,roll,role)
    }
    faildTest(typess:string){
        console.log(`khali fail kore ${typess}`);
    }
}

class FinalTesting extends Testing{
    constructor(name:string, roll:number, role:string){
        super(name,roll,role)
    }
    passTest(typess:string){
        console.log(`khali pass ${typess}`);
    }
}

const letsTest = new FinalTesting("Alice", 123, "Student");
const letsTestAgain = new SecondTesting("Bob", 456, "Teacher");
const isUser =(user:Testing)=>{
    return user instanceof FinalTesting;
}
const isAdmin =(user:Testing)=>{
    return user instanceof SecondTesting;
}
const finalOne = (user:Testing) =>{
    if(isUser(user)){
        user.passTest("final test");
        
    }
    else if(isAdmin(user)){
        user.faildTest("second test");
    }
}