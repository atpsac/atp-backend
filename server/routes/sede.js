const express = require('express');
const app = express();
const sedeController = require('../controllers/sedeController');

app.get('/sedes', sedeController.getSede);
app.post('/sedes', sedeController.postSede);

module.exports = app;

