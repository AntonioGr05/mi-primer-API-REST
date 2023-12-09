const {connectToMysql} = require('../dbconnection');

class ConfUsuarioModel {

    static async getConfiguracion() {
        let db = await connectToMysql();
        let query = db('configuracion_usuario');
        return await query;
    }

    static async consultarConfiguracionPorId(id) {
        let db = await connectToMysql();
        return await db('configuracion_usuario').where('id', id)
    }

    static async InsertConfiguracion(mensaje) {
        let db = await connectToMysql();
        const result = await db('configuracion_usuario').insert(mensaje).returning('id');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('configuracion_usuario').where('id', id).update(campos);
    }
}

module.exports = ConfUsuarioModel; 