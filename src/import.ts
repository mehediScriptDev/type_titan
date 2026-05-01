const user :{id:number; name: string; age: number, others:{phone:number;ismarried:boolean}}={
    id:1,
    name: "Mehedi",
    age: 25,
    others: {
        phone: 1934343,
        ismarried: false
    }
}
type userData = {id:number; name: string; age: number, others:{phone:number;ismarried:boolean}};
const user2 :userData={
    id:1,
    name: "Mehedi",
    age: 25,
    others: {
        phone: 1934343,
        ismarried: false
    }
}
console.log(user2,user);
