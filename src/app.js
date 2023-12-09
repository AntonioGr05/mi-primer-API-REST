const http = require('http');
const express = require('express');
const app = express();
const UsuariosController = require('./controllers/usuariosControllers');
const MensajesController = require('./controllers/mensajesControllers');
const ContactosController = require('./controllers/contactosControllers');
const ConfUsuarioController = require('./controllers/confUsuarioControllers');
const puerto = 80;
app.use(express.json());


app.get('/usuarios', UsuariosController.GetUsuarios);
app.get('/usuarios/:id([0-9]+)', UsuariosController.consultarUsuarioPorId);
app.post('/usuarios', UsuariosController.indexPost)
app.patch('/usuarios/:id([0-9]+)', UsuariosController.itemPatch);

app.get('/mensajes', MensajesController.GetMensajes);
app.get('/mensajes/:id([0-9]+)', MensajesController.consultarMensajePorId);
app.post('/mensajes', MensajesController.indexPost)
app.patch('/mensajes/:id([0-9]+)', MensajesController.itemPatch);

app.get('/contactos', ContactosController.GetContactos);
app.get('/contactos/:id([0-9]+)', ContactosController.consultarContactosPorId);
app.post('/contactos', ContactosController.indexPost)
app.patch('/contactos/:id([0-9]+)', ContactosController.itemPatch);

app.get('/confusuario', ConfUsuarioController.GetConfiguracion);
app.get('/confusuario/:id([0-9]+)', ConfUsuarioController.consultarContactosPorId);
app.post('/confusuario', ConfUsuarioController.indexPost)
app.patch('/confusuario/:id([0-9]+)', ConfUsuarioController.itemPatch);


app.get('/', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola API de Antonio Galvan Rojas'); 
});

app.listen(puerto, function() {
    console.log('servidor en espera http://localhost' + puerto);
});
