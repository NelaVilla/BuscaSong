<template>
  <div id="resultado">
    <!--Container con cards con Letra e info del artista-->
    <b-container>
      <b-card-group
        deck
        v-show="this.cancion"
        class="resultado__cards"
      >
        <b-card title="Letra de la canción" class="resultado__cards--titulo">
          <!--Icono Favorita-->
          <b-button
            size="lg"
            @click="marcarFavorito()"
            variant="outline-danger"
            class="mb-2"
            v-b-popover.hover.topright="'¡Agrégame a tus favoritas!'"
          >
            <b-icon-music-note-list
              class="resultado__cards--logo"
            ></b-icon-music-note-list>
          </b-button>

          <!--Card con cancion-->
          <b-card-text class="resultado__cards--texto text-center scroll">
            <h3 class="resultado__cards--subtitulo" ><strong>{{songName}}</strong></h3> 
            <pre class="resultado__cards--texto" id="busqueda__cancion">
            {{ cancion }}
         </pre
            >
          </b-card-text>
        </b-card>

        <!--Card con Datos Artista-->
        <b-card
          title="Información del artista"
          class="resultado__cards--titulo"
        >
          <b-card-text class="resultado__cards--texto">
            <h4 class="resultado__cards--subtitulo"><strong>{{ nombreArtista }}</strong></h4>
          </b-card-text>

          <b-card-text
            class="resultado__cards--texto"
            v-html="this.bioArtista.summary"
          >
          </b-card-text>
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "resultado",
  props: ["cancion", "bioArtista", "nombreArtista", "songName"],

  methods: {
   //envio datos de favoritos 
    marcarFavorito() {
      let payload = {
        songname: this.songName,
        cancion: this.cancion,
        bioArtista: this.bioArtista.summary,
        nombreArtista: this.nombreArtista
      };
        this.$store.dispatch('setFavorito', payload)
    },
  },
};
</script>
<style src="@/assets/scss/main.scss" lang="scss"  ></style>
