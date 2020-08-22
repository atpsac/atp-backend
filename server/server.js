require('./config/config');
require('./config/db');

const express = require( 'express' );
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

// CORS

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

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