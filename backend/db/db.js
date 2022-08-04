const mongoose = require("mongoose");
require("dotenv").config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

DB_URI = process.env.DB_URI

// connecting mongoose
mongoose.connect('mongodb://localhost:27017/upward', options).then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);
