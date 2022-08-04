const mongoose = require("mongoose");

const filesModel = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("File", filesModel);
