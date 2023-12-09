<!-- Documentacion de un endpoint post que añade un nuevo usuario /usuarios -->

# Endpoint: `POST /usuarios`

Permite añadir un nuevo usuario a la coleccion de usuarios.

## Ejemplo de Solicitud

```json
POST /usuarios
{
    "nombre": "Juan",
    "apellido": "Pérez",
    "correo": "juan.perez@example.com",
    "clave_usuario": "clave123",
    "fecha_registro": "2023-12-08T00:00:00.000Z"
}
```

## Respuesta Exitosa (Código 201 Created)

```json
{
    status: 201,
    message: "created"
}
```

## Respuestas de Errores Posibles

- Código 400 Bad Request:

  ```json
  {
    "errno": 400,
    "error": "bad_request",
    "error_description": "La solicitud no es válida"
  }
  ```

- Código 500 Internal Server Error:

  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ```

## Notas Adicionales

- Recuerda se debe colocar correctamente la ruta para añadir un nuevo usuario.
