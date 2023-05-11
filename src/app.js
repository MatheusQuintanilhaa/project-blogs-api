const express = require('express');
const index = require('./controllers/index');
const addNewUser = require('./controllers/index');
const getAllUsers = require('./controllers/index');
const authentication = require('./middlewares/tokenMiddlewares');
const getUserById = require('./controllers/index');
const newCategory = require('./controllers/index');
const getCategories = require('./controllers/index');
const newBlogPost = require('./controllers/index');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.post('/login', index.login);
app.post('/user', addNewUser.addNewUser);
app.get('/user', authentication, getAllUsers.getAllUsers);
app.get('/user/:id', authentication, getUserById.getUserById);
app.post('/categories', authentication, newCategory.newCategory);
app.get('/categories', authentication, getCategories.getCategories);
app.post('/post', authentication, newBlogPost.newBlogPosts);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
