import { log } from "console";
import { createServer, IncomingMessage, Server } from "http";

const server: Server = createServer((req: IncomingMessage,res)=>{
    console.log(res)
})

server.listen(5000,()=>{
    console.log("server is runnning");
    
})