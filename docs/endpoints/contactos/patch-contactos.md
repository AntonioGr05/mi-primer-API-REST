<!-- Documentacion de un endpoint patch que actualiza parcialmente un registro en la coleccion de contactos /contactos{id} -->

# Endpoint: `PATCH /contactos/{id}`

Permite actualizar parcialmente la información de un contacto específico mediante su identificador único.

## Parámetros de URL

- `{id}` (obligatorio): Identificador único del contacto que se desea actualizar.

## Ejemplo de Solicitud

```json
PATCH /contactos/3
{
    "usuario_id": 1,
    "contacto_id": 2,
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
    "error_description": "No se encontró el Contacto."
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

## Imagen de la respuesta en postman

![imagen](./contactosPatch.png)

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para actualizar la información sobre el contacto en específico.
- Recuerda que los campos que no se incluyan en la solicitud no serán actualizados.
- Recuerda que el usuario y el contacto deben ser usuarios existentes.
