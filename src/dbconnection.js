const fs = require('fs');
const knex = require('knex');

const connectToMysql = async () => {
    const dbPassword = await fs.promises.readFile('/run/secrets/db_password');
    const db = knex({
        client: 'mysql2',
        connection: {
            host: 'mysql',
            user: 'user_mensajes',
            password: dbPassword,
            database: 'mensajeria'
        }
    });
    return db;
};
module.exports = {connectToMysql};
