const sum = (a:number, b:number)=> {
    return a + b;
}
const result = sum(5, 3);
console.log(result);

type common = number | string;

const anothersum = (a: common, b: common) => {
    if(typeof a === "number" && typeof b === "number"){
        return a + b;
    }
    else{
        return a.toString() + b.toString();
    }
    
}

anothersum(5, "3")

type admin = {
    name: string;
    role:"admin";
}
type user = {
    name:string;
}

const getChecked = (user: admin | user)=>{
    if("role" in user){
        console.log("this is admin");
        
    }
    else{
        console.log("this is user");
        
    }
}
getChecked({name: "Alice", role: "admin"})
getChecked({name: "Bob"})