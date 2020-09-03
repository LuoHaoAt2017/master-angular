import Vue from 'vue';
import router from './router';
import App from './pages/app.vue';
import './utils/common';

new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
});