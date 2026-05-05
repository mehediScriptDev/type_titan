// type userRoles = "admin"|"user"|"guest";
// enum userRoles {
//     Admin = "admin",
//     User = "user",
//     Guest = "guest"
// }

// const canEdit = (role: userRoles) => {
//     switch(role) {
//         case userRoles.Admin:
//             return true;
//         case userRoles.Guest:
//             return false;
//         case userRoles.User:
//             return true;
//         default:
//             return false;
//     }
// }

// const checking = canEdit(userRoles.Admin);
// console.log(checking);


// const userrRoles ={
//     admin: "ADMIN",
//     user: "USER",
//     guest: "GUEST"
// } as const;


// const usersRoleFinder = (role: userRoles[keyof typeof userRoles])=>{
// if(role === userRoles.Admin){
//     return true;
// }
// if(role === userRoles.User){
//     return false;
// }
// if(role === userRoles.Guest){
//     return true;
// }
// return false;
// }

// console.log(usersRoleFinder(userrRoles.admin));


type a = undefined;
type b=number;
type c= a extends undefined? true : b extends null? true:false;


type worker = {
    name: string;
    role: string;
    salary: string;
}

type checking<T> = T extends keyof worker ? true:false;

type titan = checking<"name">


type employee ={
    name: string;
    role:string;
    age:number;
}
type auth<t> = t extends keyof employee ? true : false;
type ath = auth<"name">


const names: string[] =["Mehedi", "John", "Jane"];
const names1: number[] = [1, 2, 3];

const result = names.map(n=>n.toLowerCase());
const result1 = names1.map(n=>n.toString());

type info ={
    height:string;
    weight:number;
}

type arrayOfString = info["height"]

type final<t> =
    {
[key in keyof t] : t[key];
}

const testing: final<{name:string; role:string; age:number}> ={
name:"mehedi",
role:"developer",
age:30
}

const product: {name:string, role:string, age:number} = {
    name:"mehedi",
    role:"developer",
    age:30
}
type Productt = {
    name:string;
    role:number;
    result:string
}

type optionalProduct = Partial<Productt>;
type readONLY = Readonly<Productt>

const futureUse: Record<string,unknown> ={};
type mustbe = Required<Productt>