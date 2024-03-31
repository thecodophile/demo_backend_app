const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// // used to parse request.body in express
// const bodyParser = require("body-parser")
// // specifically parse Json data & add it to the request.body object
// app.use(bodyParser.json())

// Adding Middleware to parse Json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>This is App's homepage</h1>");
});

app.post("/car", (req, res) => {
  res.send("Recieved a post request");
});

app.listen(PORT, () => {
  console.log(`App is started on port ${PORT}`);
});

// const mongoose = require("mongoose");
// mongoose
//   .connect("mongodb://127.0.0.1:27017/vehicle", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connection Successful");
//   })
//   .catch((error) => {
//     console.log("Recieved an error");
//   });
