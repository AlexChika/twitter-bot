/* eslint-disable no-console */

import { createServer } from "https";
import app from "./app";
import start from "../lib";

const server = createServer(app);

const PORT = process.env.PORT || 5000;

setInterval(() => {
  (() => {
    start().then((timer) => console.log(timer));
  })();
}, 10000);

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
