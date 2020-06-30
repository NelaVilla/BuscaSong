<template>
    <div id="resultado">
  <!--Cards con Letra e info del artista-->
  <b-container>
    <b-card-group deck v-show="this.cancion" class="resultado__cards">
      <b-card title="Letra de la canción" class="resultado__card--titulo">  
          <b-icon-music-note-list class="resultado__card--logo" @click="marcarFavorito()" v-b-popover.hover.topright="'¡Agrégame a tus favoritas!'"></b-icon-music-note-list>

        <b-card-text class="resultado__card--texto text-center" >
         <pre>
            {{cancion}}
         </pre>
          
        </b-card-text>
      </b-card>

      <b-card title="Información del artista"  class="resultado__card--titulo" >
        
        <b-card-text class="resultado__card--texto">
         
           <h4>{{nombreArtista}}</h4>       
 </b-card-text>
 
        <b-card-text class="resultado__card--texto" v-html="this.bioArtista.summary"> 
         
        </b-card-text>
      </b-card>
    </b-card-group> 
    </b-container>
    </div>
</template>
<script>
export default {
    name: 'resultado',
   props:['cancion', 'bioArtista', 'nombreArtista'],
    
    methods:{
    marcarFavorito(){
       
      axios.post('https://us-central1-otto-vue.cloudfunctions.net/juguetes/juguete',juguetes).then(res=> console.log(res))
    }
  }
    
    
   }
   
</script>
<style src="@/assets/scss/main.scss"  lang="scss" scooped>

  
</style>