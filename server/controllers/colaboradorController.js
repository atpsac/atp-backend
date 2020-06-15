const Colaborador = require( '../models/colaborador' );
const bcrypt = require('bcrypt');

exports.getColaborador = async (req, res) => {
    
    await Colaborador
        .find({})
        .sort('apellidopat')
        .populate('sede')
        .exec( ( err, colaboradores ) => {
            
            if ( err ) {
                return res.status( 500 ).json({
                    ok: false,
                    err
                });
            }

            Colaborador.countDocuments( { }, ( err, count ) => {
                res.json({
                    ok: true,
                    colaboradores,
                    count
                });
            });
        }
        )
    ;
};

exports.postColaborador = async (req, res) => {
    let body = req.body;


    let colaborador = new Colaborador(body);
    colaborador.user.password = bcrypt.hashSync(body.user.password, 10);

    await colaborador.save( ( err, colaboradorDB ) => {

      if ( err ) {
          return res.status( 400 ).json({
              ok: false,
              err
          });
      }

      res.json({
          ok: true,
          usuario: colaboradorDB
      });

    });
};

