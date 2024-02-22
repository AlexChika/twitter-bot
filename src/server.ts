import express from "express";

const app = express();

console.log({ app });

function start() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("completed");
    }, 1000);
  });

  return promise;
}

let a = "a";
a = 5;

console.log(a);

setInterval(() => {
  (async () => {
    await start();
    console.log("finished");
  })();
}, 5000);
