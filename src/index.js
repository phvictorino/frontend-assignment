import 'Styles/main.css';
import Vue from 'vue';
import App from './App.vue'
import router from 'Router'
import store from 'Store'
import 'Components/shared'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
