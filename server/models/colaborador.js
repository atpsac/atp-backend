const mongoose = require('mongoose');
const unqValidator = require('mongoose-unique-validator');

const generos = {
    values: ['M', 'F'],
    message: '{VALUE} no es un género válido'
};

const roles = {
    values: ['USER_ROLE', 'ADMIN_ROLE'],
    message: '{VALUE} no es un rol válido'
};

const tipoColaborador = {
    values: ['TÉCNICO', 'ADMINISTRATIVO', 'GERENCIA'],
    message: '{VALUE} no es un tipo válido'
};

const colaboradorSchema = new mongoose.Schema(
{
    nombres: {
        type: String,
        minlength: 1,
        maxlength: 50,
        trim: true,
        uppercase: true,
        required: [true, 'El nombre es requerido']
    },
    apellidopat: {
        type: String,
        minlength: 1,
        maxlength: 50,
        trim: true,
        uppercase: true,
        required: [true, 'El apellido paterno es requerido']
    },
    apellidomat: {
        type: String,
        minlength: 1,
        maxlength: 50,
        trim: true,
        uppercase: true,
        required: [true, 'El apellido materno es requerido']
    },
    dni: {
        type: String,
        unique: true,
        minlength: 8,
        maxlength: 8,
        trim: true,
        required: [true, 'El dni es requerido']
    },
    genero: {
        type: String,
        minlength:1,
        maxlength:1,
        trim: true,
        uppercase: true,
        default: 'M',
        enum: generos
    },
    nacimiento: {
        type: Date
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
    telefono: [
        {
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
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'El correo es requerido'],
        match: [/\S+@\S+\.\S+/, 'no es válido']
    },
    user: {
        username: {
            type: String,
            unique: true,
            minlength: 3,
            maxlength: 20,
            trim: true,
            uppercase: true,
            required: [true, 'El usuario es requerido']
        },
        password: {
            type: String,
            required: [true, 'El password es requerido']
        },
        role: {
            type: String,
            trim: true,
            uppercase: true,
            default: 'USER_ROLE',
            enum: roles
        }
    },
    tipo: {
        type: String,
        minlength: 1,
        maxlength: 15,
        trim: true,
        uppercase: true,
        default: 'ADMINISTRATIVO',
        enum: tipoColaborador
    },
    estado: {
        type: Boolean,
        default: true
    },
    sede: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sede'
    }
}, { timestamps: true } );

colaboradorSchema.methods.toJSON = function() {

    let colaborador = this;
    let colaboradorObject = colaborador.toObject();
    delete colaboradorObject.user.password;

    return colaboradorObject;

};

colaboradorSchema.plugin(unqValidator, {message: '{PATH} debe ser único'});

colaboradorSchema.set('collection', 'colaboradores');

module.exports = new mongoose.model('Colaborador', colaboradorSchema);