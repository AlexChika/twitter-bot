import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (_, res) => {
  res.end("Welcome to the Star twitter Bot");
});

export default app;
