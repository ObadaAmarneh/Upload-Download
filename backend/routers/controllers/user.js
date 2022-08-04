const usersModel = require("../../db/models/user");

const getAllUser = (req, res) => {
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
      });
    });
};

const getUserById = (req, res) => {
  const { user_id } = req.params;
  usersModel
    .find({ _id: user_id })
    .then((user) => {
      res.status(200);
      res.json({
        success: true,
        message: `The user have This id ===> ${user_id}`,
        user: user,
      });
    })
    .catch((error) => {
      res.status(500);
      res.json({
        success: false,
        message: `The user id ==> ${user_id} is not found `,
      });
    });
};
module.exports = { getAllUser, getUserById };
