<!-- Documentacion de un endpoint patch que actualiza parcialmente un registro /usuarios -->

# Endpoint: `PATCH /usuarios/{id}`

Permite actualizar parcialmente la información de un usuario específico mediante su identificador único.

## Parámetros de URL

- `{id}` (obligatorio): Identificador único del usuario que se desea actualizar.

## Ejemplo de Solicitud

```json
PATCH /usuarios/3
{
    "nombre": "Juan",
    "apellido": "Pérez",
    "correo": "
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
    "error_description": "No se encontró el Usuario."
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

## Imagene de la respuesta en postman

![imagen](./patchUsuarios.png)

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para actualizar la información sobre el usuario en específico.
- Recuerda que los campos que no se incluyan en la solicitud no serán actualizados.

