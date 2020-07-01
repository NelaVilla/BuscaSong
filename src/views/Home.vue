<template>
  <div class="home">
    <div>
  <Header/>
    </div>
  
    <Busqueda />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Home/Header.vue'
import Busqueda from "@/components/Home/Busqueda.vue";
export default {
  name: "Home",
  components: {
    Busqueda, Header

  },
 
};
</script>
<style src="@/assets/scss/main.scss"  lang="scss" scope > 
</style>
