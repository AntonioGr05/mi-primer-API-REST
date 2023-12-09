<!-- Documentacion de un endpoint patch que actualiza parcialmente un registro en la coleccion de mensajes /mensajes{id} -->

# Endpoint: `PATCH /mensajes/{id}`

Permite actualizar parcialmente la información de un mensaje específico mediante su identificador único.

## Parámetros de URL

- `{id}` (obligatorio): Identificador único del mensaje que se desea actualizar.

## Ejemplo de Solicitud

```json
PATCH /mensajes/3
{
    "contenido": "Saludos, ¿cuándo podemos reunirnos para discutir el proyecto?"
}
```

## Respuesta Exitosa (Código 200 OK)

```json
{
    "message": "succesfull partial update"
}
```

## Respuestas de Errores Posibles

- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el Mensaje."
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

- Asegurate de incluir un ID válido en la solicitud para actualizar la información sobre el mensaje en específico.
- Recuerda que los campos que no se incluyan en la solicitud no serán actualizados.
- Recuerda que el remitente y el destinatario deben ser usuarios existentes.