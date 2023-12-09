const {connectToMysql} = require('../dbconnection');

class ContactosModel {

    static async getContactos() {
        let db = await connectToMysql();
        let query = db('contactos');
        return await query;
    }

    static async consultarContactoPorId(id) {
        let db = await connectToMysql();
        return await db('contactos').where('id', id)
    }

    static async InsertContacto(mensaje) {
        let db = await connectToMysql();
        const result = await db('contactos').insert(mensaje).returning('id');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('contactos').where('id', id).update(campos);
    }
}

module.exports = ContactosModel; 