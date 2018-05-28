import Vue from 'vue'
import Router from 'vue-router'
import indexPage from "../pages/index.vue"
import bookPage from "../pages/book.vue"
import readerPage from "../pages/reader.vue"
import searchPage from "../pages/search.vue"
import femalePage from "../pages/female.vue"
import malePage from "../pages/male.vue"
import categoryPage from "../pages/category.vue"
import rankPage from "../pages/rank.vue"
import usercenterPage from "../pages/user-center.vue"
Vue.use(Router)

export default new Router({
  mode:"history",
  base:'/webbook/',
  routes: [
    {
      name:'index',
      path:'/',
      component:indexPage,
      meta:{
        title:'书城首页',
        width:null,
        keepAlive: true,
        scrollTop:null
      }
    },
    {
      name:'book',
      path:'/book',
      component:bookPage,
      meta:{
        title:'书籍详情',
        width:null,
        keepAlive:false,
        pathName:'index'
      }
    },
    {
      name:'reader',
      path:'/reader',
      component:readerPage,
      meta:{
        width:null,
        pathName:'index'
      }
    },
    {
      name:'search',
      path:'/search',
      component:searchPage,
      meta:{
        title:'搜索',
        width:null,
        keepAlive:false
      }
    },
    {
      name:'female',
      path:'/female',
      component:femalePage,
      meta:{
        title:'女生频道',
        width:null,
        keepAlive:true,
        scrollTop:null
      }
    },
    {
      name:'male',
      path:'/male',
      component:malePage,
      meta:{
        title:'男生频道',
        width:null,
        scrollTop:null,
        keepAlive:true
      }
    },
    {
      name:'category',
      path:'/category',
      component:categoryPage,
      meta:{
        title:'分类',
        width:null
      }
    },
    {
      name:'rank',
      path:'/rank',
      component:rankPage,
      meta:{
        title:'排行',
        width:null
      },
    },
    {
      name:'usercenter',
      path:'/usercenter',
      component:usercenterPage,
      meta:{
        title:'用户中心',
        width:null
      },
    }
  ]
})
