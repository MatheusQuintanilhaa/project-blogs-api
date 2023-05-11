const express = require('express');
const index = require('./controllers/index');
const addNewUser = require('./controllers/index');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.post('/login', index.login);
app.post('/user', addNewUser.addNewUser);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
