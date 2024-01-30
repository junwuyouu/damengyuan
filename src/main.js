import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import "ag-grid-community/dist/styles/ag-grid.css";//网格“结构”样式表
import "ag-grid-community/dist/styles/ag-theme-balham.css";//网格主题

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
