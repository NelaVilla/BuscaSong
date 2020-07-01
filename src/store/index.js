import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import Firebase from 'firebase'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      cancion:'',
      name:'',
      bio:'',
      usuarioLogeado:false,
      favoritos: []
    },
    mutations: {
      SET_CANCION(state, cancion) {
        state.cancion = cancion;
      },
      SET_DATOSARTIST(state, datos) {
        state.name = datos.name;
        state.bio = datos.bio;
      },
      SET_LOGIN(state){
        state.usuarioLogeado = true;
      },
      CAMBIO_USER(state){
        state.usuarioLogeado = !state.usuarioLogeado;
        return state.usuarioLogeado;
      },
      SALIR_USUARIO(state){
        state.usuarioLogeado = false
      },
      SET_FAVORITO(state, payload){
        state.favoritos.push(payload)
      }
    },
    actions: {
      setFavorito({commit}, payload){
        let favoritas ={
          cancionesfavoritas: [payload]
        };
        let email = Firebase.auth().currentUser.email;
        let info = {
          email, favoritas
        };
        axios.post('https://us-central1-buscasong.cloudfunctions.net/usuarios/usuario', info)
       .then((data)=>{
          console.log(data)
          commit('SET_FAVORITO', payload)
        })
      
    },
      setCancion({
        commit
      }, payload) {
        axios
          .get(`https://api.lyrics.ovh/v1/${payload.artista}/${payload.titulo}`, {
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
          })
          .then((result) => {
            console.log(result.data.lyrics)
            let cancion = result.data.lyrics
            commit('SET_CANCION', cancion
            )
          })
          .catch((error) => {
            console.log(error);
          });

      },
      setDatosArtist({
        commit
      }, payload) {
        axios
          .get(
            `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${payload.artista}&api_key=${payload.keyFm}&format=json`, {
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin": "*",
              },
            }
          )
          .then((result) => {
            console.log(result.data.artist);
            let datos = result.data.artist
            commit('SET_DATOSARTIST', datos )
          });

      },
      setLogin({
        commit
      }){
        commit('SET_LOGIN')
      },
      salirUsuario({commit}){
        Firebase.auth()
        .signOut()
        .then(() => {
          commit('SALIR_USUARIO')
          alert("Te haz deslogeado");
          this.$router.push({ name: "Login" });
        });
        
      }

    },
    /* getters: {
      bio: (state) =>state.datosArtist.s
      nombre: (state) => (name) => {
        return state.datosArtist.filter(dato => dato.name === name)
      },
    }, */
      modules: {}
    
})