const express = require("express");
const app = express();

const userValidation = require("../models/user.model");

const conn = require("../util/db");

// get all users
const getAllUsers = (req, res) => {
  // const query = process.env.GET_ALL_USER;
  // conn.query(query, (err, data, filed) => {
  //   if (err) {
  //     console.log(err);
  //     res.json({ message: "error" });
  //     return;
  //   }
  //   res.json({ data });
  // });
  res.json({ data: "dara" });
};

//auth user
const authUser = (req, res) => {
  const userInfo = req.body;
  res.json({ message: userInfo });
};

//get user by id
const getUserById = (req, res) => {
  const userId = req.params.id;
  res.json({ message: userId });
};

//delete user by id
const deleteUser = (req, res) => {
  const userid = req.params.id;
  res.json({ message: `userid ${userid} is deleted !!` });
};

//update user
const updateUser = (req, res) => {
  const userInfo = req.body;
  res.json(userInfo);
};

//Create new user
const createUser = (req, res) => {
  const { error } = userValidation(req.body);
  if (error) {
    let err = {};
    let errMsg = "";

    error.details[0].message.split('"').forEach((element) => {
      errMsg += element;
    });

    err[error.details[0].context.key] = errMsg;

    res.status(400).send(err);
    return;
  }
  res.json({message:"user register successfully !"});
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
  authUser,
};
