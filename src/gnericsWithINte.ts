interface Developer<t,x =null> {
    name: string;
    age: number;
    skills: string[];
    salary:number;
    smartWatch:t;
    farm?:x;

}

const calculation : Developer<number,{name: string, age: number}> ={
name:"Mehedi",
age: 25,
skills: ["TypeScript", "JavaScript"],
salary: 50000,
smartWatch: 123456,
farm: {
    name: "Alice",
    age: 30
}
}

const farmCalculation :Developer<number> = {
    name: "Fiverr",
    age: 30,
    skills: ["Python", "Django"],
    salary: 60000,
    smartWatch: 789012
}

const miavai=(value:string):string =>value;
miavai("Hello, world!") 

const arevai = <t>(value:t) => value;
arevai("Hello, world!")
arevai(33);
arevai({id: 1, name: "Alice"})

const studentIcno = <t>(value:t) =>{
    return{
        id:33,
        ...value
    }
}
console.log(studentIcno({idd:44,Name:"oi kire"}));
