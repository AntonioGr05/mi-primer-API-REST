const UsuariosModel = require('../models/usuariosModel');

class UsuariosController {

    /**
     * Recupera la coleccion de usuarios
     * 
     * ```http
        * GET /usuarios
        * Accept: application/json
     * ```
     */

    static async GetUsuarios(req, res) {
        let usuarios = await UsuariosModel.getUsuarios();
        res.json(usuarios);
    }

    /**
        * Recibe una peticion para crear un nuevo usuario
        * 
        * ```http
        * POST /usuarios
        * Accept: application/json
        * Content-Type: application/json
        * 
        * {
        *   "nombre": "Antonio",
        *   "apellido": "Galvan",
        *   "email": "ejemplo@correo.com",
        *  "clave_usuario": "123456"
        *   "fecha_registro": "1999-12-31"
    */

    static async indexPost(req, res) {
        try {
            const newData = req.body;
            const insertId = await UsuariosModel.InsertUsuario(newData);

            res.status(201)
                .header('location', `/usuarios/${insertId}`)
                .send({status:201, message: 'Created'});
        }catch (e) {
            console.log(e);
            res.status(400).send({status: 400, message: 'Bad Request'});
        }
    }

    static async consultarUsuarioPorId(req, res) {
        let id = req.params.id;
        let data = await UsuariosModel.consultarUsuarioPorId(id);
        if (data.length == 0){
            res.status(404).send({status: 404, message: 'Not Found'});
            return;
        }
        res.send(data[0]);
    }


    static async itemPatch(req, res) {
        try{
            const id = req.params.id;
            const updatefields = req.body;
            
            const result = await UsuariosModel.actualizar(id, updatefields);

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

module.exports = UsuariosController;