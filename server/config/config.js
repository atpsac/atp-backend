// Puerto

process.env.PORT = process.env.PORT || 3000;

// Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Caducidad Token

process.env.CADUCIDAD_TOKEN = '48h';

// Seed

process.env.SEED = process.env.SEED || 'seedenv';

// Base de datos

let urlDb;

if ( process.env.NODE_ENV === 'dev' ) {
    urlDb = 'mongodb://localhost:27017/atpdb';
} else {
    urlDb = 'mongodb+srv://admin:Am4z0n4s*@cluster0-sjkow.mongodb.net/atpdb';
}

process.env.URLDB = urlDb;


