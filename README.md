
# proyecto final DL BuscaSong

BuscaSong es un buscador de letras de canciones. Esta enfocado para usuarios que les guste la música y deseen poder almacenar dentro de su cuenta las canciones que sus cantantes o grupos favoritos.

El usuario al entrar a la página será dirigido a la pagina de login en donde deberá ingresar sus datos, una vez logrado esto, es reenviado a la pagina Home en donde encontrará el buscador de letras, este tendrá dos parámetros de búsqueda los cuales son: el nombre del artista o grupo musical y el nombre de la canción, al hacer click al botón aparecerá la letra de la canción, una imagen del grupo musical y además un ícono de corazón, el cual al cliquear hará que la canción se guarde dentro de lista de canciones favoritas..
En la siguiente vista, llamada “Canciones favoritas”, estarán almacenadas las canciones guardadas con el icono del corazón de la vista “Home”. Y finalmente se puede dirigir a la vista “Editar Canciones” en donde podrá editar el nombre de la canción y/o eliminar canciones, esto se podrá realizar con los respectivos botones “Editar” y “Borrar”. En barra de navegación se observa un boton “LogOut” el cual permite al usuario deslogearse de la pagina web.

## Guía de estilos

## Tipos de fuentes y tamaño

- Museo Moderno: Light 300, Bold 700
- Roboto Condensed: Light italic 300

## Colores

- \$gris-fondo: #ecf4f3
- \$pistacho: #d1eecc
- \$agua-mar: #76dbd1
- \$menta: #57a99a

# Comandos y Framework

## Project setup

```
yarn install o npm install
```

### Compiles and hot-reloads for development

```
yarn serve // npm run serve
```

### Compiles and minifies for production

```
yarn build // npm run build
```

### Run your unit tests

```
yarn test:unit
```

### Run your end-to-end tests

```
yarn test:e2e
```

### Lints and fixes files

```
yarn lint
```

### Framework utilizado de Vue

Boostrap-vue

### API utilizadas

https://lyricsovh.docs.apiary.io/
https://www.last.fm/api/show/artist.getInfo

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
