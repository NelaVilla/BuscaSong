<template>
  <div id="login">
    <!--Inputs email/contraseña -->
    <b-container class="ingreso">
      <b-col>
        <!--Foto Ingreso--->
        <b-img
          class="ingreso__logo"
          center
          src="https://image.flaticon.com/icons/svg/3048/3048396.svg"
          alt="Center image"
        ></b-img>

        <!--Inputs de login--->
        <label for="Email" label-align class="ingreso__titulo"> Email</label>
        <b-form-input
          class="ingreso__input"
          type="text"
          v-model="email"
        ></b-form-input>
        <label for="contraseña" class="ingreso__titulo">Contraseña</label>
        <b-form-input
          class="ingreso__input"
          type="password"
          v-model="password"        
        ></b-form-input>

        <!---Botones de login--->
        <b-row class="ingreso__botones" align-h="center">
          <b-button
            variant="outline-primary"
            @click="login()"
            class="ingreso__botones--boton"
            >Ingresar</b-button
          >
        </b-row>
      </b-col>
      <!--Boton Login-->
    </b-container>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  name:'login',
  data(){
    return{
      email:"",
      password:""
    }
  },
  methods:{
   login(){
       Firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(user =>{
                    alert('Fuiste Loggeado')
                    this.$router.push({ name: 'Home' });
                    this.$store.dispatch('setLogin')
                }),
                reject =>{
                    alert('No te haz loggeado')
                    console.log(reject.message)
    }

} 
  }
}
</script>
<style src="@/assets/scss/main.scss" lang="scss" scope></style>