
# Proyecto final DL BuscaSong

BuscaSong es un buscador de letras de canciones. Esta enfocado para usuarios que les guste la música y deseen poder almacenar dentro de su cuenta las canciones que sus cantantes o grupos favoritos.

El usuario al entrar a la página será dirigido a la pagina de login en donde deberá ingresar sus datos, una vez logrado esto, es reenviado a la pagina Home en donde encontrará el buscador de letras, este tendrá dos parámetros de búsqueda los cuales son: el nombre del artista o grupo musical y el nombre de la canción, al hacer click al botón aparecerá la letra de la canción y la el cual al cliquear hará que la canción se guarde dentro de lista de canciones favoritas.
En la siguiente vista, llamada “Tus favoritas”, estarán almacenadas las canciones guardadas con el boton de una nota músical de la vista “Home”.  En barra de navegación se observa un boton “LogOut” el cual permite al usuario deslogearse de la pagina web.

## Guía de estilos

## Tipos de fuentes

- Libre Baskerville
- Overlock
- Galada

## Colores
- gris-fondo: #ecf4f3
- pistacho: #d1eecc
- agua-mar: #76dbd1
- menta: #57a99a
- gris-texto: #354649;
- gris-titulos: #6c7a89;
- gris-navbar: #e0e7e9;
- ultimo-color: #a3c6c4;

## Tamaño Fuentes
- xxxxx-large: 50px ;
- xxxx-large: 45px ;
- xxx-large: 40px ;
- xx-large: 35px ;
- x-large: 30px ;
- large: 20px ;
- medium: 16px ;
- small: 14px ;
- x-small: 12px ;

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

- [Boostrap-vue](https://bootstrap-vue.org/)

### API utilizadas

- [Api lyrics.ovh](https://lyricsovh.docs.apiary.io/)
- [Last FM api](https://www.last.fm/api/show/artist.getInfo)

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
