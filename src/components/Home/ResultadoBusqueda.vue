<template>
    <div id="resultado">
  <!--Cards con Letra e info del artista-->
  <b-container>
    <b-card-group deck v-show="this.cancion" class="resultado__cards">
      <b-card title="Letra de la canción" class="resultado__card--titulo">  
          <b-icon-music-note-list class="resultado__card--logo" ></b-icon-music-note-list>

        <b-card-text class="resultado__card--texto text-center" v-html="cancion">
           
        </b-card-text>
      </b-card>

      <b-card title="Información del artista"  class="resultado__card--titulo" >
        <b-card-text class="resultado__card--texto">
         
           <p>{{nombreArtista}} </p>       
 </b-card-text>
        <b-card-text class="resultado__card--texto"> 
         {{bioArtista}}  
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
         
   }
   
</script>
<style src="@/assets/scss/main.scss"  lang="scss">

  
</style>