const express = require("express");
const { uploadFiles, getAllFiles , downloadFile } = require("../controllers/file");

const file = express.Router();

file.post("/upload", uploadFiles);
file.get("/", getAllFiles);
file.get("/download:id",downloadFile)
module.exports = file;


