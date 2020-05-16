import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/base.css'
// 引入封装的评论组件
import Commons from './components/pottsBox/Commons.vue'
// 注册全局的组件
Vue.component('my-com', Commons)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
