const checkRules = <t>(value:t)=>value;

checkRules("Hello, world!");
checkRules(33);


const anotherRules = <t>(value:t)=>{
    return{
        name: "mahadi",
        age: 25,
        ...value
    }
}

console.log(anotherRules({roll: 123}));


const itachiuchiha= <t extends {name: string;idCard:number}>(value:t)=>{
return{
    clan:"Uchiha",
    brother: "Sasuke",
    ...value
}
}
const anotherLog = itachiuchiha({name: "Itachi", idCard: 123456})
console.log(anotherLog);


type testt = {
    name: string;
    roll:number;
    bike:string
}

type tester = keyof testt;


const newuser = {
    name: "John Doe",
    year:300,
    award: false
}

const gotthename = newuser["name"];
const gotyear = newuser["year"];
const awardgot = newuser["award"];



const sajeeb ={
    name:"sajeeb the chotovai",
    salary: 300,
    experience: 5

}
type userrrr ={
    name: string;
    salary: number;
    experience:number;
}

const sajeebremarmu = (obj:userrrr, key: keyof userrrr) => {
    return obj[key];
}

const firstTry = sajeebremarmu({name:"ashik", salary: 200, experience: 2},"experience")

console.log(firstTry);
