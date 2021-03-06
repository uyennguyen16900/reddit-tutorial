/* Mongoose Connection */
const mongoose = require("mongoose");
assert = require("assert");

const url = "mongodb://localhost:27017/reddit-db";
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/reddit-db",
 { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));

// display debug info from Mongoose in the console
mongoose.set("debug", true);

module.exports = mongoose.connection;
