const express = require("express");
const expressValidator = require("express-validator");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

// Setup DotEnv config
require("dotenv").config({
  path: "./src/server/config/config.env",
});

// Connect to Database
connectDB();

// Import routes
const users = require("./routes/users");

// Create the Express app.
const app = express();

// Setup morgan which gives us HTTP request logging
// Setup CORS
// Setup request body JSON parsing
app.use(express.json(), cors({ credentials: true }), morgan("dev"));

// Setup a friendly greeting for the root route
app.get("/", (req, res) => res.send("Welcome to the root of HerculesDB"));

// Add users route
app.use("/api/v1/users", users);

// Send 404 if no other route matched.
app.use((req, res) => {
  res.status(404).json({
    message: "Route Not Found",
  });
});

// Set our port.
const PORT = process.env.PORT || 5000;

// Start listening on our port.
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
