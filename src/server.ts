/* eslint-disable no-console */

import { createServer } from "http";
import restartJob from "./cron";

import app from "./app"; // express app.
import start from "../lib";

const server = createServer(app);

setInterval(() => {
  (() => {
    start().then((timer) => console.log(timer));
  })();
}, 60000);

// this is  a gitlab test migration

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is now running.`, server.address());
});

restartJob.start();
