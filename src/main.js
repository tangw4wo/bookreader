// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from "./components/Layout.vue"
import router from './router/index'
import "./assets/css/reset.css"
import axios from "axios"
import Mock from "./mock/mock"
import VueLazyload from "vue-lazyload"

Vue.use(VueLazyload)
Vue.prototype.$axios= axios;
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title以及传递宽度 */
  if(to.name=='male' && from.name=='index'){
    to.meta.scrollTop=0
  }
  if(to.name=='female' && from.name=='index'){
    to.meta.scrollTop=0
  }
  if(to.name=='index' && from.name=='search'){
    to.meta.scrollTop=0
  }
  if(to.name=='book' && from.name!='reader'){
    from.meta.keepAlive=true
  }
  if(to.name=='index'){
    from.meta.keepAlive=false;
  }
  if (to.meta.title) {
    document.title = to.meta.title;
  }else{
    document.title=''
  }
  if(from.meta.width!=null){
     to.meta.width=from.meta.width
  }
  if(to.meta.pathName && from.name!='reader' &&from.name!=null){
    to.meta.pathName=from.name
  }
  next();
})
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
