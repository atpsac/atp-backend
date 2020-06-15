const mongoose = require('mongoose');
const unqValidator = require('mongoose-unique-validator');

const sedeSchema = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        uppercase: true,
        unique: true,
        required: [true, 'El nombre es requerido']
    },
    direccion: {
        calle: {
            type: String,
            trim: true,
            uppercase: true
        },
        region: {
            type: String,
            trim: true,
            uppercase: true
        },
        provincia: {
            type: String,
            trim: true,
            uppercase: true
        },
        distrito: {
            type: String,
            trim: true,
            uppercase: true
        },
        ubigeo: {
            type: String,
            trim: true,
            minlength: 6,
            maxlength: 6 
        }
    },
    geolocalizacion: {
        latitud: {
            type: Number
        },
        longitud: {
            //type: mongoose.Schema.Types.Decimal128
            type: Number
        }
    },
    telefono: [
        {   
            _id : false,
            tipo: {
                
                type: String,
                trim: true
            },
            numero: {
                type: String,
                trim: true,
                minlength: 7,
                maxlength: 9,
            }
        }
    ],
    estado: {
        type: Boolean,
        default: true
    }
}, { timestamps: true } );

sedeSchema.plugin(unqValidator, {message: '{PATH} debe ser único'});

sedeSchema.set('collection', 'sedes');

module.exports = mongoose.model('Sede', sedeSchema);