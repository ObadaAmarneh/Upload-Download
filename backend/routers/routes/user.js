const express = require("express");
const { createNewUser } = require("../controllers/signup");
const { login } = require("../controllers/login");
const { getUserById, getAllUser } = require("../controllers/user");
const usersRouter = express.Router();

usersRouter.post("/signup", createNewUser);
usersRouter.post("/login", login);
usersRouter.get("/", getAllUser);
usersRouter.get("/:user_id", getUserById);

module.exports = usersRouter;
