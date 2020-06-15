const Colaborador = require('../models/colaborador');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.postLogin = async (req, res) => {

    let body = req.body;

    await Colaborador.findOne({'user.username': body.user.username}, (err, colaboradorDB) => {

        if(err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!colaboradorDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o password incorrectos'
                }
            });
        }

        if (!bcrypt.compareSync(body.user.password, colaboradorDB.user.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o password incorrectos'
                }
            });
        }

        let token = jwt.sign({
            colaborador: colaboradorDB
        }, process.env.SEED, {
            expiresIn: process.env.CADUCIDAD_TOKEN
        });

        res.json({
            ok: true,
            colaborador: colaboradorDB,
            token
        });

    });


};
