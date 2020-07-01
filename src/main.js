import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Firebase from 'firebase'
import FirebaseConfig from "./config/firebaseconfig";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Firebase.initializeApp(FirebaseConfig);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
