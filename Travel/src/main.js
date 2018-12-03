// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastClick from 'fastclick'//运用fastclick库，可以减少移动端click事件延迟300ms的问题
import VueAwesomeSwiper from 'vue-awesome-swiper' //轮播图插件
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body) //运用fastclick库，可以减少移动端click事件延迟300ms的问题
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },// ES6写法 等价于components:{App:App}
  template: '<App/>'
})
