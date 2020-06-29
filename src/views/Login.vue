<template>
    <div id="login">
        <!--Inputs email/contraseña -->
        <b-container >
            <b-col>
    <b-img center src="https://picsum.photos/125/125/?image=58" alt="Center image"></b-img>

     <label for="Email" > Email</label>
      <b-form-input type="text" v-model="email"></b-form-input>
   <label for="contraseña">Contraseña</label>
      <b-form-input type="password"  v-model="password"></b-form-input>
    </b-col>
      <!--Boton Login-->
       <b-row class="busqueda__botones" align-h="center">
      <b-button variant="outline-primary" @click="ingresar()" class="busqueda__boton"
        >Buscar</b-button>
      </b-row>
      
        </b-container>
    </div>
</template>

<script>
import Firebase from 'firebase'

export default {

    name:'login',
    components:{
        Firebase
    },
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods: {
        ingresar(){
            console.log('hola')
            /*
            Firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(
                user =>{
                    alert('Fuiste Loggeado')
                    console.log(Firebase.auth().currentUser.email)
                    this.$router.push({ name: 'Home' });

                },
                reject =>{
                    alert('No te haz loggeado')
                    console.log(reject.message)
 */
                }
    }
        }
    

</script>