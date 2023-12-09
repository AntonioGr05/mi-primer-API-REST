<!-- Documentacion de un endpoint get que trae un item especifico de la coleccion confusuario -->

# Endpoint: `GET /confusuario/{id}`

Permite obtener un confusuario específico mediante su identificador único.

## Parámetros de URL

- `{id}` (obligatorio): Identificador único del confusuario que se desea obtener.

## Ejemplo de Solicitud

```http

GET /confusuario/1

```

## Respuesta Exitosa (Código 200 OK)

```json

{
    "id": 1,
    "usuario_id": 1,
    "notificaciones_activas": 1,
    "preferencias_privacidad": "Alta"
}

```

## Respuestas de Errores Posibles

- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
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

- Asegurate de incluir un ID válido en la solicitud para obtener el confusuario en específico.
