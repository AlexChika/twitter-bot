/* eslint-disable no-console */

import { CronJob } from "cron";
import https from "https";

let time = 0;
const url = "https://twitter-bot-p130.onrender.com";

const restartJob = CronJob.from({
  cronTime: "*/1 * * * *",
  onTick() {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        console.log(res.statusMessage);
        console.log("Server restarted");
      } else console.error(`Server restart failed ${res.statusCode}`);
    });

    time += 1;
    console.log({ time });
  },
  // timeZone: "America/Los_Angeles",
  start: false
});

export default restartJob;
