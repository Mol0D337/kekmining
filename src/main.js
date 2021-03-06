import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
import ClickOutside  from 'vue-click-outside'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import {i18n} from './i18n'
import Loader from '@/components/Loader/Loader'
import VueEnglishdatepicker from "vue-englishdatepicker"
import PureVueChart from 'pure-vue-chart'
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';
import TrendChart from "vue-trend-chart";

Vue.use(TrendChart);
Vue.use(Donut);
Vue.use(PureVueChart);
Vue.use(VueEnglishdatepicker);
Vue.use(Vuelidate);
Vue.use(ClickOutside );
Vue.component('Loader', Loader);

Vue.config.productionTip = false;

firebase.initializeApp ({
  apiKey: "AIzaSyA9TaIG1UJBhwIn1QMeke5QfoOmHikpnDo",
  authDomain: "kekmining.firebaseapp.com",
  databaseURL: "https://kekmining.firebaseio.com",
  projectId: "kekmining",
  storageBucket: "kekmining.appspot.com",
  messagingSenderId: "411165923792",
  appId: "1:411165923792:web:a45d8b398d3fccbafec1d5",
  measurementId: "G-2DQFTBBXMW"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      i18n,
      render: h => h(App)
    }).$mount('#app');
  }
});

