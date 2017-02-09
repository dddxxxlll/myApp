// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Router from './router';
import goods from './components/goods/goods.vue';

let app = Vue.extend(App);
let nrouter = new Router();
nrouter.map({
  '/goods': {
    component: goods
  }
});

nrouter.start(app, '#app');
