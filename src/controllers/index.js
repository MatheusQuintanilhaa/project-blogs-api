const login = require('./user/login.controllers');
const addNewUser = require('./user/addNewUser.controllers');
const getAllUsers = require('./user/getAllUsers.controllers');

module.exports = {
  login,
  addNewUser,
  getAllUsers,
};