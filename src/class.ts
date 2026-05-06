class animal {
    name:string;
    age:number;
    sound: string;

    constructor(name: string, age: number, sound: string) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }
}

const act = new animal("oi kire",4,"meow")
console.log(act);


class TeamMern {
    // leader: string;
    // members: number;
    // salary: number;

    constructor (public leader: string, public members: number, public salary: number) {
        // this.leader = leader;
        // this.members = members;
        // this.salary = salary;
    }

    method(){
        console.log(`Leader: ${this.leader}, Members: ${this.members}, Salary: ${this.salary}`);
        
    }
}

const newTeam = new TeamMern("John Doe", 5, 50000);
console.log(newTeam);