"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class animal {
    name;
    age;
    sound;
    constructor(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }
}
const act = new animal("oi kire", 4, "meow");
console.log(act);
class TeamMern {
    leader;
    members;
    salary;
    // leader: string;
    // members: number;
    // salary: number;
    constructor(leader, members, salary) {
        this.leader = leader;
        this.members = members;
        this.salary = salary;
        // this.leader = leader;
        // this.members = members;
        // this.salary = salary;
    }
    method() {
        console.log(`Leader: ${this.leader}, Members: ${this.members}, Salary: ${this.salary}`);
    }
}
const newTeam = new TeamMern("John Doe", 5, 50000);
console.log(newTeam);
//# sourceMappingURL=class.js.map