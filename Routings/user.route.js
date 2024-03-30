const express = require("express");
const app = express();

const userRoute = express.Router();
app.use(userRoute);

// add controller
const {
  getAllUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
  authUser,
} = require("../controller/user.controller");

// get all users
userRoute.get("/allUsers", getAllUsers);

userRoute.post("/authUser", authUser);

//get user by id
userRoute.get("/getUserById/:id", getUserById);

//update User
userRoute.get("/updateUser", updateUser);

//delete user by id
userRoute.delete("/deleteUser/:id", deleteUser);

//Register new User
userRoute.post("/addUser", createUser);

module.exports = userRoute;
