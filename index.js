const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();

dotenv.config();

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Moongoose connected")
);

// Import route
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const { json } = require("express");

// Middleware
app.use(express.json());
// Route middlewaer
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(5000, () => console.log("Server up and running"));
