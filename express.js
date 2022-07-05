import settings from './config/index.js';
import express from "express";
import path from "path";
import fs from "fs";
import pgp from "pg-promise";

const __dirname = path.resolve();
const app = express();
const PORT = settings.PORT;
const test = pgp(/*options*/)
const db = test(settings.DB_CONNECTION_STRING)

app.use(express.json())
app.use(express.static(path.join(__dirname, "static")));

app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "static", "index.html"));
});

app.use(express.json())
app.use(express.static(path.join(__dirname, "static")));

app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "static", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`);
});
