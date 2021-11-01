const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

// Connect DataBase
connectDB();

app.get("/", (req, res) => {
  res.send("Hello Express!! 🎉");
});

const { PORT } = process.env || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
