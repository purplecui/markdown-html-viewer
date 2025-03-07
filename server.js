import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config();

//express object
const app = express();

app.set("view engine", "ejs");

//getting __dirname in es module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// console.log(__dirname);

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("pad");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`listening to ${process.env.DEV_MODE} in port ${port}`);
});
