import 'Styles/main.css';
import Vue from 'vue';
import App from './App.vue'
import router from 'Router'
import 'Components/shared'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
