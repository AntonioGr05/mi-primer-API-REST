<!-- Documentacion de un endpoint get que trae los items que se encuentran en la coleccion mensajes -->

# Endpoint: `GET /mensajes`

Permite obtener la lista de mensajes que se encuentran en la coleccion de mensajes.

## Ejemplo de Solicitud

```json
GET /mensajes
```

## Respuesta Exitosa (Código 200 OK)

```json
[
    {
        "id": 1,
        "remitente_id": 1,
        "destinatario_id": 2,
        "contenido": "Hola, ¿cómo estás?",
        "fecha_envio": "2023-12-08T19:19:26.000Z"
    },
    {
        "id": 2,
        "remitente_id": 2,
        "destinatario_id": 1,
        "contenido": "No estoy muy bien verdad",
        "fecha_envio": "2023-12-08T00:00:00.000Z"
    },
    {
        "id": 3,
        "remitente_id": 1,
        "destinatario_id": 3,
        "contenido": "Saludos, ¿cuándo podemos reunirnos para discutir el proyecto?",
        "fecha_envio": "2023-12-08T19:19:50.000Z"
    },
    {
        "id": 4,
        "remitente_id": 1,
        "destinatario_id": 3,
        "contenido": "El sabado despues de las 12pm con mucho gusto",
        "fecha_envio": "2023-12-08T19:41:48.000Z"
    }
]
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
  }
  ```

## Notas Adicionales

- Recuerda se debe colocar correctamente la ruta para obtener la lista de mensajes.

