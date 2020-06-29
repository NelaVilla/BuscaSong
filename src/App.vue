<template>
  <div id="app">
       <Navbar/>
   </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/App/Navbar.vue";
import Footer2 from "@/components/App/Footer2.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Footer2,
    
   
  }
};
</script>
<style src="@/assets/scss/main.scss"  lang="scss">
</style>