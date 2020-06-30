import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import Firebase from 'firebase'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      cancion:'',
      name:'',
      bio:''
    },
    mutations: {
      SET_CANCION(state, cancion) {
        state.cancion = cancion;

      },
      SET_DATOSARTIST(state, name, bio) {
        state.name = name;
        state.bio = bio;
      }
    },
    actions: {

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
            commit('SET_CANCION', {
              cancion: result.data.lyrics
            })
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
            commit('SET_DATOSARTIST', {
              name: result.data.artist.name, 
              bio: result.data.artist.bio.summary
            })
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