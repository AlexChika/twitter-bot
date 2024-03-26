/* eslint-disable no-console */

import { CronJob } from "cron";
import http from "http";

const url =
  process.env.NODE_ENV === "production"
    ? "https://twitter-bot-p130.onrender.com"
    : "https://localhost:5000";

const restartJob = CronJob.from({
  cronTime: "*/14 * * * *",
  onTick() {
    http.get(url, (res) => {
      if (res.statusCode === 200) {
        console.log(res.statusMessage);
        console.log("Server restarted");
      } else console.error(`Server restart failed ${res.statusCode}`);
    });
  },
  start: false
});

export default restartJob;
