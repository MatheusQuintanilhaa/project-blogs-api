const login = require('./user/login.controllers');
const addNewUser = require('./user/addNewUser.controllers');
const getAllUsers = require('./user/getAllUsers.controllers');
const getUserById = require('./user/getUserById.controllers');
const newCategory = require('./category/newCategory.controllers');
const getCategories = require('./category/getCategories.controllers');
const newBlogPosts = require('./post/newBlogPost.controllers');
const getPosts = require('./post/getPost.controllers');
const getPostsById = require('./post/getPostsById.controller');
const updatePost = require('./post/updatePost.controller');
const deletePost = require('./post/deletePost.controller');
const deleteUser = require('./user/deleteUser.controllers');
const searchPost = require('./post/searchPost.controller');

module.exports = {
  login,
  addNewUser,
  getAllUsers,
  getUserById,
  newCategory,
  getCategories,
  newBlogPosts,
  getPosts,
  getPostsById,
  updatePost,
  deletePost,
  deleteUser,
  searchPost,
};