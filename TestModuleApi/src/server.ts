import { createServer, IncomingMessage, Server } from "http";
import { routeHandler } from "./route/route";

const server: Server = createServer((req: IncomingMessage, res) => {
  routeHandler(req, res);
});

server.listen(8000, () => {
  console.log("server is running");
});
