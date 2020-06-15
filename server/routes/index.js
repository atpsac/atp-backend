const express = require('express');
const app = express();

app.use(require('./colaborador'));
app.use(require('./sede'));
app.use(require('./login'));

module.exports = app;