const MensajesModel = require('../models/mensajesModel');

class MensajesController {

    /**
     * Recupera la coleccion de mensajes
     * 
     * ```http
        * GET /mensajes
        * Accept: application/json
     * ```
     */

    static async GetMensajes(req, res) {
        let mensajes = await MensajesModel.getMensajes();
        res.json(mensajes);
    }

    /**
        * Recibe una peticion para crear un nuevo mensaje
        * 
        * ```http
        * POST /mensajes
        * Accept: application/json
        * Content-Type: application/json
        * 
        * {
        *   "remitente_id": 1,
        * "destinatario_id": 2,
        * "contenido": "Hola, ¿cómo estás?",
        * "fecha_envio": "2023-12-08"
        * }
    */

    static async indexPost(req, res) {
        try {
            const newData = req.body;
            const insertId = await MensajesModel.InsertMensaje(newData);

            res.status(201)
                .header('location', `/Mensajes/${insertId}`)
                .send({status:201, message: 'Created'});
        }catch (e) {
            console.log(e);
            res.status(400).send({status: 400, message: 'Bad Request'});
        }
    }

    /**
     * consultar un mensaje por id
     * 
     * la funcion recibe un id de mensaje y regresa la informacion del mensaje
     * 
     * ```http
     * GET /mensajes/:id
     * ```
     */

    static async consultarMensajePorId(req, res) {
        let id = req.params.id;
        let data = await MensajesModel.consultarMensajePorId(id);
        if (data.length == 0){
            res.status(404).send({status: 404, message: 'Not Found'});
            return;
        }
        res.send(data[0]);
    }

    /**
     * Crea una sustitucion parcial de un mensaje
     * recibe un id de mensaje y los campos a actualizar
     * 
     * ```http
     * PATCH /usuarios/:id
     * Accept: application/json
     * Content-Type: application/json
     * ```
     */

    static async itemPatch(req, res) {
        try{
            const id = req.params.id;
            const updatefields = req.body;
            
            const result = await MensajesModel.actualizar(id, updatefields);

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

module.exports = MensajesController;