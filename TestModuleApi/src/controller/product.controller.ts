import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/product.service";

export const controllerHandler = (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;
  const porduct = readProduct();
  if (url === "/products" && method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "this is products route",data: porduct }));
  }
};
