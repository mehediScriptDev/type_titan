let anything: any;

anything = "Mehedi";
anything =33;
anything={
    name:"mehedi",
    role: "developer"
}
anything =["react", "angular", "vue"];

(anything as string[]).join(", ");

const lets = ("22 s");
const [first, second] = lets.split(" ");

interface officeInformation {
    "name": string;
    "role": string;
    "salary": number;
}

const officeInfo: officeInformation ={
    "name": "Mehedi",
    "role": "Developer",
    "salary": 5000
}

type officeinfo = {
    name: string;
    role: string;
    salary: number;
}

const officeinformations: officeinfo = {
    name: "Mehedi",
    role: "Developer",
    salary: 5000
}

const employee:{ name: string; role: string; salary: number } = {
    name: "Mehedi",
    role: "Developer",
    salary: 5000
}
type emploo = {
    name:string;
    role:string;
    salary:number;
    currentPosition: string;
}
type manager = {
    name: string;
    rolee:number;
    salary:number;
}

type hybrid = emploo & manager;

const hybridEmployee: hybrid = {
    name:"Mehedi",
    role:"Developer",
    salary:5000,
    currentPosition:"Senior Developer",
    rolee:1,
}

type roler = {
    role: "Developer" | "Manager" | "Admin"
}

type variousStudent = {
    student: "valo" | "bad"
}

type studnet = {
    read:number;
    marks:number;
    roll:number;
}
type marked = {
    role:string;
    mark:number;
}

interface Newstudnet extends studnet{
    bou:number;
}

interface newInterfate extends marked {
    done:boolean;
}

// const newStudent:string[] =[22,"ddd", "mehedi","dddd"];

const abdullah: string[] = ["22", "ddd", "mehedi", "dddd"];

type abbulash = string[];

interface abdullah2 {
    [index:number]: string;
}