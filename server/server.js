const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

// Connect DataBase
connectDB();

app.get("/", (req, res) => {
  res.send("Hello Express!! 🎉");
});

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const { PORT } = process.env || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
