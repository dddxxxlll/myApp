// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
// import VueRouter from './router';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';
Vue.use(VueRouter);
Vue.use(VueResource);
// let app = Vue.extend(App);
// let router = new VueRouter();
// router.map({
//   '/goods': {
//     component: goods
//   }
// });
const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];
const router = new VueRouter({
  routes
});
// router.start(app, '#app');
// const app =
/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  components: {App},
  router
  // render: h => h(App)
}).$mount('#app');
router.push(goods);
