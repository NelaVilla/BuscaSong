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
       <b-nav-item :to="{ name: 'Login' }">Login</b-nav-item>
          <b-nav-item :to="{ name: 'Home' }">Home</b-nav-item>
          <b-nav-item :to="{ name: 'Favoritos' }">Tus Favoritas</b-nav-item>
          <b-nav-item :to="{ name: 'Editar' }">Editas tu Favs</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
            <b-button
              size="sm"
              class="my-2 my-sm-0"
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
export default {
  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          alert("Te haz deslogeado");
          this.$router.push({ name: "Login" });
        });
    },
  },
};
</script>
<style src="@/assets/scss/main.scss"  lang="scss">

</style>

