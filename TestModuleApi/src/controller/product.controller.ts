import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/product.service";
import type { Product } from "../types/product.typs";

export const controllerHandler = (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;
  const porduct = readProduct();

  const newRoute = url?.split("/");
  const getId = newRoute && newRoute[1] ==="products" ? Number(newRoute[2]):null;
  
  
  if (url === "/products" && method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "this is products route",data: porduct }));
  }
  else if(method==="GET" && getId !=null){
    const porduct = readProduct();
    const result = porduct.find((p:Product)=>p.id===getId)
    res.writeHead(200,{"content-type":"application/json"});
    res.end(JSON.stringify({message:"data received", data: result}))
    
  }
};
