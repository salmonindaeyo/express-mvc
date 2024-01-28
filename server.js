const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const { readdirSync } = require("fs");
const morgan = require("morgan");
require("dotenv").config();
const bodyParser = require("body-parser");
const connectDB = require("./Config/db");
// Middleware Connections
connectDB();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// Routes
readdirSync("./Routes").map((r) => app.use("/api", require("./Routes/" + r)));
// Connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App running in port: " + PORT);
});
