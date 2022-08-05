const mongoose = require("mongoose");

const filesModel = new mongoose.Schema({
  fileName: { type: String, required: true },
  userName: { type: String, required: true },
  type: { type: String, required: true },
});

module.exports = mongoose.model("File", filesModel);
