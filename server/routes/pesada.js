const express = require('express');
const app = express();
const pesadaController = require('../controllers/pesadaController');

app.get('/pesadas', pesadaController.getPesada);
app.post('/pesadas', pesadaController.postPesada);

module.exports = app;

