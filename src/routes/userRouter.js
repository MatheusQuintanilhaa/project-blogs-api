const express = require('express');
const login = require('../controllers/user/login.controllers');
// const authMiddlewares = require('../middlewares/tokenMiddlewares');

const routes = express.Router();

routes.post('/', login);

module.exports = routes;