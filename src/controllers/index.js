const login = require('./user/login.controllers');
const addNewUser = require('./user/addNewUser.controllers');
const getAllUsers = require('./user/getAllUsers.controllers');
const getUserById = require('./user/getUserById.controllers');
const newCategory = require('./category/newCategory.controllers');
const getCategories = require('./category/getCategories.controllers');

module.exports = {
  login,
  addNewUser,
  getAllUsers,
  getUserById,
  newCategory,
  getCategories,
};