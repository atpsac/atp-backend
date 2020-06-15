const Sede = require('../models/sede');

exports.getSede = async (req, res) => {

    await Sede
        .find({})
        .sort('nombre')
        .exec((err, sedes) => {
            if( err ) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            Sede.count({}, (err, count) => {
                res.json({
                    ok: true,
                    sedes,
                    count
                });
            });
        });
};

exports.postSede = async (req, res) => {
    let body = req.body;
    
    let sede = new Sede(body);

    // sede.nombre = body.nombre;
    // sede.direccion.calle = body.direccion.calle;
    // sede.direccion.region = body.direccion.region;
    // sede.direccion.provincia = body.direccion.provincia;
    // sede.direccion.distrito = body.direccion.distrito;
    // sede.direccion.ubigeo = body.direccion.ubigeo;
    // sede.geolocalizacion.latitud = body.geolocalizacion.latitud;
    // sede.geolocalizacion.longitud = body.geolocalizacion.longitud;

    // body.telefono.forEach((telefono, index) => {

    //     if (sede.telefono[index] === undefined) {
    //         sede.telefono[index] = {};
    //     };

    //     sede.telefono[index].tipo = telefono.tipo;
    //     sede.telefono[index].numero = telefono.numero;
    // });

    await sede.save((err, sedeDB) => {
        
        if( err ) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if ( !sedeDB ) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            sede: sedeDB
        });

    });
};