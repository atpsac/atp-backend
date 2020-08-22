const mongoose = require('mongoose');
const unqValidator = require('mongoose-unique-validator');

const documentos = {
    values: ['GI', 'IN', 'GR'],
    message: '{VALUE} no es un documento válido'
};


const pesadaSchema = mongoose.Schema({
    fecha: {
        type: String,
        trim: true,
        required: [true, 'La fecha es requerida']
    },
    documento: {
        type: String,
        maxlength: 2,
        trim: true,
        uppercase: true,
        required: [true, 'El documento es requerido'],
        enum: documentos        
    },
    referencia: {
        type: String,
        maxlength: 10,
        trim: true,
        required: [true, 'La referencia es requerida']  
    },
    linea: {
        type: String,
        minlength: 7,
        maxlength: 20,
        trim: true,
        uppercase: true
    },
    balanza: {
        type: String,
        maxlength: 11,
        trim: true,
        uppercase: true,
        required: [true, 'La balanza es requerida'] 
    },
    producto: {
        type: String,
        maxlength: 100,
        trim: true,
        uppercase: true,
        required: [true, 'El producto es requerido'] 
    },
    lote: {
        type: String,
        maxlength: 10,
        trim: true,
        uppercase: true
    },
    empaque: {
        type: String,
        maxlength: 50,
        trim: true,
        uppercase: true,
        required: [true, 'El empaque es requerido'],
    },
    cantidad: {
        type: Number,
        trim: true,
        required: [true, 'La cantidad es requerida']
    },
    tara: {
        type: Number,
        trim: true,
        required: [true, 'La tara es requerida']
    },
    taraPaleta: {
        type: Number
    },
    pesoBruto: {
        type: Number,
        required: [true, 'El peso bruto es requerido']
    },
    pesoNeto: {
        type: Number,
        required: [true, 'El peso neto es requerido']
    },
    estado: {
        type: Boolean,
        default: true
    },

    sede: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sede'
    }

}, {timestamps: true});

pesadaSchema.plugin(unqValidator, {message: '{PATH} debe ser único'});

pesadaSchema.set('collection', 'Pesadas');


module.exports = mongoose.model('Pesada', pesadaSchema);