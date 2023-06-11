import "dotenv/config";

import express from "express";
import cors from "cors";
import indexRouter from "./src/routes/_index";

import { frontendUrl } from "./config";

const PORT = Number(process.env.PORT) || 9000;

const app = express();

app.use(cors({ origin: frontendUrl }));
app.use(express.json());
app.use(express.urlencoded());

app.use("/", indexRouter);

app.get("/", (req, res) => {
  res.send("are baba thikk hai");
});

app.get("/api", (req, res) => {
  res.send("asia kam karta hai");
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
