<!-- Documentacion de un endpoint get que trae un item especifico de la coleccion contactos -->

# Endpoint: `GET /contactos/{id}`

Permite obtener un contacto específico mediante su identificador único.

## Parámetros de URL

- `{id}` (obligatorio): Identificador único del contacto que se desea obtener.

## Ejemplo de Solicitud

```http

GET /contactos/1

```

## Respuesta Exitosa (Código 200 OK)

```json

{
    "id": 1,
    "usuario_id": 1,
    "contacto_id": 2,
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

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener el contacto en específico.