import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import Firebase from 'firebase'
import createPersistedState from "vuex-persistedstate";

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
      
      SALIR_USUARIO(state){
        state.usuarioLogeado = false
      },
      SET_FAVORITO(state, favs){
        state.favoritos = favs;
      },
      ELIMINARFAV(state, nuevoFav){
        state.favoritos = nuevoFav
      }
      
    },
    actions: {
      setFavorito({commit,state}, cancionFav){
        let favoritas = state.favoritos.cancionesFav;
      
        if(!favoritas.find( f => f.songname === cancionFav.songname)){
          favoritas.push(cancionFav);
           
        let email =  Firebase.auth().currentUser.email
        let favs = {
          cancionesFav : favoritas,
        }
        let payload = {
          email,  favs
          }
        
        axios.post('https://us-central1-buscasong.cloudfunctions.net/usuarios/usuario',payload)
       .then((data)=>{
          console.log(data)
          commit('SET_FAVORITO', favs)
        })
      
    }
  },
    eliminarFav({commit, state}){
      let favoritos = state.favoritos
      let nuevoFav =  favoritos.splice(favoritos.filter(f => f.songname !== f.songname))


    let email = Firebase.auth().currentUser.email;
    let info = {
      email, favoritas
    };    
    axios.post("https://us-central1-buscasong.cloudfunctions.net/usuarios/usuario", info).then((data) => {
      commit("eliminarFav", nuevoFav);
    });
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
            alert("No se encontró esa canción")
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
      modules: {},
      plugins: [createPersistedState()]
    
})