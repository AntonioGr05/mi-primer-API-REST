const {connectToMysql} = require('../dbconnection');

class MensajesModel {

    static async getMensajes() {
        let db = await connectToMysql();
        let query = db('mensajes');
        return await query;
    }

    static async consultarMensajePorId(id) {
        let db = await connectToMysql();
        return await db('mensajes').where('id', id)
    }

    static async InsertMensaje(mensaje) {
        let db = await connectToMysql();
        const result = await db('mensajes').insert(mensaje).returning('id');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('mensajes').where('id', id).update(campos);
    }

}

module.exports = MensajesModel;