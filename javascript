const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// Monogdb connection
mongoose.set("useFindAndModify", false);
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to db!");
    app.listen(3000, () => console.log("Server Up and running"));
  }
);
