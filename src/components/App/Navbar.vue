<template>
  <div>
       <b-navbar toggleable="lg" class="navbar" type="dark">
   <b-navbar-brand>
            <img
              src="@/assets/img/logo-buscasongfinal.png"
              class="navbar__logo" 
              alt="BuscaSong"
            />
            
          </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
       <b-nav-item  class="navbar__link"  v-show="!usuarioLogeado" :to="{ name: 'Login' }">Login</b-nav-item>
          <b-nav-item class="navbar__link" :to="{ name: 'Home' }">Busca una Canción</b-nav-item>
          <b-nav-item class="navbar__link" :to="{ name: 'Favoritos' }">Tus Favoritas</b-nav-item>
          <b-nav-item :to="{ name: 'Editar' }">Editas tu Favs</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
            <b-button
            v-show=" usuarioLogeado"
              size="sm"
              class="my-2 my-sm-0 navbar__boton"
              type="submit"
              @click="logout()"
              >Cerrar Sesión</b-button
            >
          </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

    <router-view></router-view>
  </div>
</template>

<script>
import Firebase from "firebase";
import{mapState} from 'vuex'
export default {

  methods: {
    logout() {
      this.$store.dispatch('salirUsuario')
         },
  },
  computed:{
     ...mapState(['usuarioLogeado']),
  }
};
</script>
<style src="@/assets/scss/main.scss"  lang="scss" scooped >

</style>

