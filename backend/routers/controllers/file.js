const filesModel = require("../../db/models/file");
const path = require("path");

const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/images");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

var upload = multer({ storage: storage }).array("file");

const uploadFiles = (req, res) => {
  const userName = req.params.userName;
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
    } else {
      var FileName = req.files[0].originalname;
      console.log(" req.file", req.files);
      const newFile = new filesModel({
        fileName: req.files[0].originalname,
        type: req.files[0].mimetype,
        userName: userName,
      });
      newFile
        .save()
        .then((result) => {
          console.log(result);
          res.status(201);
        })
        .catch((err) => {
          console.log(err);
        });
      res.status(200).send(FileName);
    }
  });
};

const getAllFiles = (req, res) => {
  filesModel
    .find({})
    .then((files) => {
      res.status(200);
      res.json({
        success: true,
        massage: ` All the files`,
        files: files,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({
        success: false,
        massage: ` Server Error `,
      });
    });
};

const downloadFile = (req, res) => {
  console.log("req._id", req.params.id);
  id = req.params.id;
  filesModel
    .findById(id)
    .then((file) => {
      console.log(
        'path.normalize(__dirname + "/../../public/images/{file.name}"',
        path.normalize(__dirname + `/../../public/images/${file.fileName}`)
      );
      res.download(
        path.normalize(__dirname + `/../../public/images/${file.fileName}`),
        `${file.fileName}`
      );
    })
    .catch((err) => {
      res.status(500);
      res.json({
        success: false,
        massage: ` Server Error `,
      });
    });
};
module.exports = { uploadFiles, getAllFiles, downloadFile };
