import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Favoritos from "../views/Favoritos.vue";
import Editar from "../views/Editar.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
     meta:{
       login : true
    } 
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/favoritos",
    name: "Favoritos",
    component: Favoritos,
    
  },
  {
    path: "/editar",
    name: "Editar",
    component: Editar,
   
  },
  {
    path :"*",
    redirec: to=>{
      this.$router.push({ name: 'Login' });
    }
  },
  {
    path :"/",
    redirec: to=>{
      this.$router.push({ name: 'Login' });
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});/* 
  router.beforeEach((to, from, next) => {
  let user = Firebase.auth().currentUser;
  console.log(user)
  let authRequired = to.matched.some(route => route.meta.login);
  if (!user && authRequired) {
  next('login'); //como el rout.push
  } else if (user && !authRequired) { //cuando usuario esta logeado pero quiere relogearse
  next('home');
  } else { //ruta publica y para entrar a login
  next();
  }
  });
  */
export default router;
