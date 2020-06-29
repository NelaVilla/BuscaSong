<template>
    <div id="resultado">
  <!--Cards con Letra e info del artista-->
  <b-container>
    <b-card-group deck v-show="this.cancion">
      <b-card title="Letra de la canción" class="d-flex justify-content-between align-items-center text-center">  
          <b-icon-music-note-list ></b-icon-music-note-list>
        <b-card-text class="busqueda__lyric text-center">
          
 {{this.cancion }}
          
         
        </b-card-text>
      </b-card>

      <b-card title="Información del artista"  class="text-center" >
        <b-card-text>
          <h3>
              {{ this.nombreArtista }}</h3>
        </b-card-text>
        <b-card-text class="rb__resumen"> 
          {{this.bioArtista}}
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