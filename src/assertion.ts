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