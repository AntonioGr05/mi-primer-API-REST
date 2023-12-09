const ConfUsuarioModel = require('../models/confUsuarioModel');

class ConfUsuarioController {

    /**
     * Recupera la coleccion de una nueva configuracion
     * 
     * ```http
        * GET /confusuario
        * Accept: application/json
     * ```
     */

    static async GetConfiguracion(req, res) {
        let configuracion = await ConfUsuarioModel.getConfiguracion();
        res.json(configuracion);
    }

    /**
        * Recibe una peticion para crear un nuevo confusuario
        * 
        * ```http
        * POST /confusuario
        * Accept: application/json
        * Content-Type: application/json
        * 
        * {
        *    "usuario_id": 1,
        *    "notificaciones_activas": 1,
        *    "preferencias_privacidad": "Alta"
        * }
    */

    static async indexPost(req, res) {
        try {
            const newData = req.body;
            const insertId = await ConfUsuarioModel.InsertConfiguracion(newData);

            res.status(201)
                .header('location', `/confUsuario/${insertId}`)
                .send({status:201, message: 'Created'});
        }catch (e) {
            console.log(e);
            res.status(400).send({status: 400, message: 'Bad Request'});
        }
    }

    /**
     * consultar una configuracion de usuatio por id
     * 
     * la funcion recibe un id de configuracion y regresa la informacion de la configuracion
     * 
     * ```http
     * GET /confusuario/:id
     * ```
     */


    static async consultarContactosPorId(req, res) {
        let id = req.params.id;
        let data = await ConfUsuarioModel.consultarConfiguracionPorId(id);
        if (data.length == 0){
            res.status(404).send({status: 404, message: 'Not Found'});
            return;
        }
        res.send(data[0]);
    }

    /**
     * Crea una sustitucion parcial de una configuracion
     * recibe un id de configuracion y los campos a actualizar
     * 
     * ```http
     * PATCH /confusuario/:id
     * Accept: application/json
     * Content-Type: application/json
     * ```
     */

    static async itemPatch(req, res) {
        try{
            const id = req.params.id;
            const updatefields = req.body;
            
            const result = await ConfUsuarioModel.actualizar(id, updatefields);

            if (result === 0){
                res.status(404).send({status: 404, message: 'Not Found'});
            } else {
                res.send({message:'successfull partial update'});
            }
        } catch (e) {
            console.log(e);
            res.status(400).send({status: 400, message: 'Bad Request'});
        }
    }
}

module.exports = ConfUsuarioController;