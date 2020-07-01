<template>
  <div id="barrabusqueda">
    <!--Inputs y botons para buscar-->
    <b-container>
      <b-row class="busqueda__inputs" >
        <b-col class="busqueda__col">
      <b-form-input
        v-model="lyric"
        placeholder="Escribe el nombre de la canción"
        class="inputA"
      ></b-form-input>
      <b-button pill class="busqueda__botones" @click="buscar()" 
        >Encuentra la canción</b-button>
      </b-col>

      <b-col class="busqueda__col">
      <b-form-input
       v-model="artist"
        placeholder="Escribe el nombre del artista o grupo"
        class="inputA"
      ></b-form-input>
      <b-button pill class="busqueda__botones" @click="infoArtista()"
        >Información sobre el artista</b-button>
      </b-col>
      </b-row>     
 
    <!--Cards con Letra e info del artista-->
    <ResultadoBusqueda :cancion="cancion" 
    :bioArtista="bio"
    :nombreArtista="name"
    :songName="lyric"
      />
   </b-container>

  </div>
</template>

<script>

import ResultadoBusqueda from './ResultadoBusqueda'
import { mapState } from 'vuex'
//import {mapGetters} from 'vuex'

export default {
  name: "barrabusqueda",
  components:{
    ResultadoBusqueda
  },

  data() {
    return {
      artist: "",
      lyric: "",
      
    };
  },
  methods: {
      buscar() {
     let titulo = this.lyric.toLowerCase()
     let payload = {artista : this.artist, titulo, keyFm: "2fb853fec0984769558ca651f33fe319"}
      this.$store.dispatch('setCancion', payload)
    },

   infoArtista(){
     let payload = {artista : this.artist, titulo:this.lyric, keyFm: "2fb853fec0984769558ca651f33fe319"}
     this.$store.dispatch('setDatosArtist',payload)
   }
  },
  computed: {
    ...mapState(['cancion','bio', 'name']),
    //...mapGetters(['bio', 'nombre'])
  }
 
};
</script>
<style src="@/assets/scss/main.scss" lang="scss" scope >
  
</style>