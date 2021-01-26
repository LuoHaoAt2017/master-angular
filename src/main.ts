import 'babel-polyfill';
import Vue from 'vue';
import router from './routes';
import App from './pages/App.vue';
import './utils/common';
import andt from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(andt);

new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
});
