const user = "";

const test =user ?? "User not found";

console.log(test);



const discount = (discount: unknown)=>{
    if(typeof discount === "number"){
        console.log(discount);
        
    }
    else if(typeof discount === "string"){
        const perser = discount.split(" ");
        console.log(Number(perser[0]));
    }
    else{
        console.log("Invalid discount format");
    }
}

discount(23);
discount("11 tk")
discount(null)