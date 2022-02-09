const express = require("express");
const app = express();
require("dotenv/config");
const connectDB = require("./config/db");

connectDB();

app.get("/", (req, res) => res.send("API running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
