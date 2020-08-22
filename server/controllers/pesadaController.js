const Pesada = require('../models/pesada');

exports.getPesada = async (req, res) => {

    await Pesada
        .find({})
        .sort('fecha')
        .exec((err, pesadas) => {
            if( err ) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            Pesada.count({}, (err, count) => {
                res.json({
                    ok: true,
                    pesadas,
                    count
                });
            });
        });
};

exports.postPesada = async (req, res) => {
    let body = req.body;
    console.log(body);
    
    let pesada = new Pesada(body);

    await pesada.save((err, pesadaDB) => {
        
        if( err ) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if ( !pesadaDB ) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            pesada: pesadaDB
        });

    });
};