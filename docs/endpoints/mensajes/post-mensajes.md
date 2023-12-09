<!-- Documentacion de un endpoint post que añade un nuevo mensaje a la coleccion mensajes -->

# Endpoint: `POST /mensajes`

Permite añadir un nuevo mensaje a la coleccion de mensajes.

## Ejemplo de Solicitud

```json
POST /mensajes
{
    "remitente_id": 1,
    "destinatario_id": 2,
    "contenido": "Hola, ¿cómo estás?",
    "fecha_envio": "2023-12-08T19:19:26.000Z"
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

- Recuerda se debe colocar correctamente la ruta para añadir un nuevo mensaje.
- Recuerda que el remitente y el destinatario deben ser usuarios existentes.

