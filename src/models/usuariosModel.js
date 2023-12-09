const {connectToMysql} = require('../dbconnection');

class UsuariosModel {

    static async getUsuarios() {
        let db = await connectToMysql();
        let query = db('usuarios');
        return await query;
    }

    static async consultarUsuarioPorId(id) {
        let db = await connectToMysql();
        return await db('usuarios').where('id', id)
    }

    static async InsertUsuario(usuario) {
        let db = await connectToMysql();
        const result = await db('usuarios').insert(usuario).returning('id');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('usuarios').where('id', id).update(campos);
    }
}

module.exports = UsuariosModel;