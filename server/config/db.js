require('./config');
const mongoose = require('mongoose');

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(
    () => { console.log('Base de datos online'); },
    err => { console.log( err ); }
);

// importar modelos

require( '../models/colaborador' );
require( '../models/sede' );
require( '../models/pesada' );