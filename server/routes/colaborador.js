const express = require( 'express' );
const app = express();
const colaboradorController = require('../controllers/colaboradorController');

app.get('/colaboradores', colaboradorController.getColaborador);
app.post('/colaboradores', colaboradorController.postColaborador);

module.exports = app;

