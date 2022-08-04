const express = require("express");
const cors = require("cors");

const db = require("./db/db");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

// import Routers
const usersRouter = require("./routers/routes/user");
const fileRouter = require("./routers/routes/file");

const path = "/api";

//app Routers
app.use(`${path}/user`, usersRouter);
app.use(`${path}/file`, fileRouter);
app.use(express.static("public"));

app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`App is on http://localhost:${PORT}`);
});
