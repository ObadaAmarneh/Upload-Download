const usersModel = require("../../db/models/user");

const createNewUser = (req, res) => {
  const { firstName, lastName, phoneNumber, email, password } = req.body;

  const newUser = new usersModel({
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
  });
  newUser
    .save()
    .then((result) => {
      res
        .status(201)
        .json({ success: true, message: "Success user added", result: result });
    })
    .catch((err) => {
      if (err.keyPattern) {
        return res.status(409).json({
          success: false,
          message: `The email already exists`,
        });
      }
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    });
};

const getAllUsers = async (req, res) => {
  usersModel
    .find({})
    .then((users) => {
      res.status(200);
      res.json({
        success: true,
        massage: ` All the Users`,
        users: users,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({
        success: false,
        massage: ` Server Error `,
        err: err,
      });
    });
};
module.exports = { createNewUser, getAllUsers };
