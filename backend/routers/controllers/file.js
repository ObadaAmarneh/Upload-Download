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
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
    } else {
      var FileName = req.files[0].originalname;
      console.log(" req.file", req.files);
      const newFile = new filesModel({
        name: req.files[0].originalname,
      });
      newFile
        .save()
        .then((result) => {
          console.log(result);
          res.status(201);
          //   .json({ success: true, message: "Success user added", result: result });
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
      // const pathFile = `C:\\Users\\Ninja\\Desktop\\Up_ward\\backend\\public\\images\\${file.name}`;
      // console.log("path", pathFile);
      console.log(
        'path.normalize(__dirname + "/../../public/images/{file.name}"',
        path.normalize(__dirname + `/../../public/images/${file.name}`)
      );
      res.download(
        path.normalize(__dirname + `/../../public/images/${file.name}`),
        `${file.name}`
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

// const multer = require("multer");
// const upload = multer({
//   dest: "./uploads",
//   filename: function (req, file, callback) {
//     callback(null, file.originalname);
//   },
// });
// console.log(req.body);
// console.log(req.files);
// res.json({ message: "Successfully uploaded files" });
