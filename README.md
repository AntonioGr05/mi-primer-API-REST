

# MI primer servidor node en Node

## comandos

para correr el contenedor.

```bash
    docker-compose up -d
```

para entrar a la consola del contenedor.

```bash
    docker exec -it "nombre del container" sh
```

para emepezar con node ponemos el siguiente comnado.

```bash
    npm init 
```

para instalar express

```bash
    npm install express --save
```

## archivos a ignorar

ignorar directorios node_modules y .vscode

## crear archivo .dockerignore

```bash
    node_modules
    .vscode
```

para instalar las dependencias desde el inicio del contenedor.

```docker
    RUN npm install
```
