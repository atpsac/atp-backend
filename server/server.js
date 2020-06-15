require('./config/config');
require('./config/db');

const express = require( 'express' );
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

// parse application/json

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }) );

// Rutas

app.use( '/', require('./routes/index') );

// Static Files

app.use(express.static(path.join(__dirname, '../public')));

// Iniciando Node

app.listen( process.env.PORT, () => {
    console.log(`Servidor iniciado en puerto ${ process.env.PORT }`);
});