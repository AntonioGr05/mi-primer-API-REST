const ContactosModel = require('../models/contactosModel');

class ContactosController {

    /**
     * Recupera la coleccion de contactos
     * 
     * ```http
        * GET /contactos
        * Accept: application/json
     * ```
     */

    static async GetContactos(req, res) {
        let contactos = await ContactosModel.getContactos();
        res.json(contactos);
    }

    /**
        * Recibe una peticion para crear un nuevo contacto
        * 
        * ```http
        * POST /contactos
        * Accept: application/json
        * Content-Type: application/json
        * 
        * {
        *   "usuario_id": 1,
        *   "contacto_id": 2
        * }
    */

    static async indexPost(req, res) {
        try {
            const newData = req.body;
            const insertId = await ContactosModel.InsertContacto(newData);

            res.status(201)
                .header('location', `/contactos/${insertId}`)
                .send({status:201, message: 'Created'});
        }catch (e) {
            console.log(e);
            res.status(400).send({status: 400, message: 'Bad Request'});
        }
    }

    /**
     * consultar un contacto por id
     * 
     * la funcion recibe un id de contacto y regresa la informacion del contacto
     * 
     * ```http
     * GET /contactos/:id
     * ```
     */

    static async consultarContactosPorId(req, res) {
        let id = req.params.id;
        let data = await ContactosModel.consultarContactoPorId(id);
        if (data.length == 0){
            res.status(404).send({status: 404, message: 'Not Found'});
            return;
        }
        res.send(data[0]);
    }

    /**
     * Crea una sustitucion parcial de un contacto
     * recibe un id de contacto y los campos a actualizar
     * 
     * ```http
     * PATCH /contactoss/:id
     * Accept: application/json
     * Content-Type: application/json
     * ```
     */


    static async itemPatch(req, res) {
        try{
            const id = req.params.id;
            const updatefields = req.body;
            
            const result = await ContactosModel.actualizar(id, updatefields);

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

module.exports = ContactosController;