<template>
  <div id="barrabusqueda">
    <!--Inputs y botons para buscar-->
    <b-container >
      <b-row class="busqueda__inputs" >
        <b-col>
      <b-form-input
        v-model="lyric"
        placeholder="Escribe el nombre de la canción"
      ></b-form-input>
      </b-col>

      <b-col>
      <b-form-input
       v-model="artist"
        placeholder="Escribe el nombre del artista o grupo"
      ></b-form-input>
      </b-col>
      </b-row>
      <!--Boton buscar-->
      <b-row class="busqueda__botones" align-h="center">
      <b-button variant="outline-primary" @click="buscar()" class="busqueda__boton"
        >Buscar</b-button>
        <b-button variant="outline-primary" @click="infoArtista()" class="busqueda__boton"
        >Información sobre el artista</b-button>
      </b-row>
    </b-container>
    <!--Cards con Letra e info del artista-->
    <ResultadoBusqueda :cancion="cancion" 
    :bioArtista="bio"
    :nombreArtista="name"
    
      />

  </div>
</template>

<script>
import axios from "axios";
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
     let payload = {artista : this.artist, titulo:this.lyric, keyFm: "2fb853fec0984769558ca651f33fe319"}
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
<style lang="scss">
.busqueda__inputs{
  margin: 5% 0 5% 0;
}
  .busqueda__lyric{
    text-align: center;
   
  }
  .busqueda__botones{
    justify-content: center;
    margin-bottom: 2%;
  }
  
</style>