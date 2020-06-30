import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Favoritos from "../views/Favoritos.vue";
import Editar from "../views/Editar.vue"
import Firebase from 'firebase'


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
     meta: {
      login: true,
    }, 
    
  },
  {
    path: "/editar",
    name: "Editar",
    component: Editar,
    meta: {
      login: true,
    }, 
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
});

router.beforeEach((to, from, next) => {
  let user = Firebase.auth().currentUser;
  let authRequired = to.matched.some((route) => route.meta.login);
  if (!user && authRequired) {
    next("Login");
  } else if (user && !authRequired) {
    next("Home");
  } else {
    next();
  }
});
   
export default router;
