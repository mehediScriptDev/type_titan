import type { IncomingMessage, ServerResponse } from "http";
import { controllerHandler } from "../controller/product.controller";

export const routeHandler =(req:IncomingMessage,res:ServerResponse)=>{
    const url = req.url;
    const method = req.method;

    if(url==="/" && method=== "GET"){
        res.writeHead(200,{"content-type": "application/json"});
        res.end(JSON.stringify({message: "this is home"}));
    }
    else if(url?.startsWith("/products")){
        controllerHandler(req,res);
    }
    else{
        res.writeHead(400,{"content-type":"application/json"});
        res.end(JSON.stringify({message: "not found"}))
    }
}
