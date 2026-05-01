const course: string = "hello next level "

console.log(course);

let userId = 333;

// userId = "hey there";

console.log(userId);

let name : string = "Mehedi";
// name = 34;

let ammu = true;
// ammu = 33;
// let abbu : boolean = "hello"

let name3 = undefined;
name3 = 33;
name3 = "hello ts";

let name4 :undefined = undefined;
// name4 = "name"
let name44;
name44 =33;
name44 = "hello ts";
name44 = {vai: "hello"};

let anyd:any = "vaia"
anyd =33;

// tuple 

const soul :[string,string] = ["ami", "tumi" ];
const area : [number,number,number, string] = [10, 20, 30, "hello"];

let worldofobject: {name: string; age: number} ={
    name: "Mehedi",
    age: 25
}

// worldofobject.push()

let testing : {first: string; second: string, third: string} = {
    first:"Mehedi",
    second: "gangstar",
    third: "third"
}

// testing.third = 33
let letsTryGain:{} = 44;

// let newThings: {thik: "ok boss"; nai: string; keno: string} = {thik: "hello", nai: "world", keno: "keno"};

// newThings.keno=33;
// newThings.thik = "new value";
// newThings.keno = "new keno value";
// newThings.nai = "new nai value";

let gainBruh : {readonly firstname: string, bouname: string} = {firstname: "Mehedi", bouname: "dont tell you"};

// gainBruh.firstname = "John";

const arr: number[] = [1,4,54,43,56,3,5,35,3,45,354,34];

arr.map((p:number)=>{})


const objectDes = {name33: "Mehedi", age: 25, class: "10th", others:{phone: 1934343 ,roll: 10}};

// const {name33, age,others:{phone, roll}} = objectDes;
const {name33:MyName, others: {roll}} = objectDes;
console.log(MyName,roll);


