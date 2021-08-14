const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("mongoose");
const app = express();

require("dotenv-flow").config();

//routers
app.get("/api/welcome", (req, res) => {
  res.status(200).send({
    message: "Welcome to the MEN RESTful API"
  })
});

// mongoDB connect
mongoose.connect(
  process.env.DBHOST,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
).then((result) => {
  console.log("Success connection to MongoDB")
}).catch((error) => {
  console.log("Error connection to MongoDb: " + error)
})

// mongoose.connection.once("open", () => {
//   console.log("connected successful to MongoDB")
// });

// 
const PORT = process.env.PORT || 4000;
app.listen(PORT, function() {
  console.log("Server is running on port: " + PORT);
})

module.exports = app;