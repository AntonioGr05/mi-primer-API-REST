# Endpoint: `GET /usuarios/{id}`

Permite obtener información detallada sobre un usuario específico mediante su identificador único.

## Parámetros de URL

- `{id}` (obligatorio): Identificador único del usuario que se desea recuperar.

## Ejemplo de Solicitud

```http
GET /usuario/3
```

## Respuesta Exitosa (Código 200 OK)

```json
{
    "id": 3,
    "nombre": "Juan",
    "apellido": "Pérez",
    "correo": "juan.perez@example.com",
    "clave_usuario": "clave123",
    "fecha_registro": "2023-12-08T00:00:00.000Z"
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

![imagen](./usuariosidGET.png)

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información sobre el usuario en específico.
