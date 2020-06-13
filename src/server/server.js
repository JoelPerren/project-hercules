// https://teamtreehouse.com/library/rest-api-authentication-with-express

"use strict";

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes");

// Create the Express app.
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost/HerculesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Connected to HerculesDB");
  })
  .on("error", (e) => {
    console.log("Connection error: ", e);
  });

// Setup request body JSON parsing and CORS settings.
app.use(express.json(), cors({ credentials: true }));

// Setup morgan which gives us HTTP request logging.
app.use(morgan("dev"));

// Setup a friendly greeting for the root route.
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the REST API Authentication with Express project!",
  });
});

// Add routes route
app.use("/v1", routes);

// Send 404 if no other route matched.
app.use((req, res) => {
  res.status(404).json({
    message: "Route Not Found",
  });
});

// Setup a global error handler.
app.use((err, req, res, next) => {
  console.error(`Global error handler: ${JSON.stringify(err.stack)}`);

  res.status(500).json({
    message: err.message,
    error: process.env.NODE_ENV === "production" ? {} : err,
  });
});

// Set our port.
app.set("port", process.env.PORT || 5000);

// Start listening on our port.
const server = app.listen(app.get("port"), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});
