<template>
    <div id="tabla_favs" >
        <b-container>
<h2 class="tabla_favs" style="text-align: center;">Mis Canciones Favoritas</h2>
 
    <div class="container table-responsive">
      <table class="table ">
        <thead class="thead-submit">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre de la cancion</th>
            <th scope="col">Nombre del Artista o Grupo</th>
            <th scope="col">Canción</th>
            <th scope="col">Biografía </th>
           
            </tr>
        </thead>

        <tbody>   
          <tr v-for="(favorito,i) in favoritos.cancionesFav" :key="i">
            <td>{{i+1}}</td>
            <td>{{favorito.songname}}</td>
            <td>{{favorito.nombreArtista}}</td>
            <td class="scroll">{{favorito.cancion}}</td>
            <td class="scroll">{{favorito.bioArtista}}</td>
            <td> <!-- <button class="btn btn-info">Editar</button> -->
           <!--  <button class="btn btn-danger" @click="eliminar(favorito[i])">Eliminar</button>--></td> 
            </tr>
        </tbody>
      </table>
    </div>
</b-container>

    </div>
</template>

<script>
import {mapActions} from 'vuex'
import Firebase from 'firebase'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
   name:"tabla_favs",
   

    mounted(){
    let email = Firebase.auth().currentUser.email;
    axios.get("https://us-central1-buscasong.cloudfunctions.net/usuarios/usuarios/"+email)
    .then((data) => 
    {console.log(data);
      
    });
  },
  methods:{
 ...mapActions(['eliminarFav']),

 eliminar(){
   this.eliminarFav()
 }
  },
        

computed: {
    ...mapState (['favoritos'])
},
}
</script>