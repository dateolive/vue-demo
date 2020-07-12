import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入
import VueRouter from 'vue-router'
// use
Vue.use(VueRouter)
// 导入 需要通过路由管理的组件
import discovery from './components/03.discovery.vue'
import playlists from './components/04.playlists.vue'
import songs from './components/05.songs.vue'
import mvs from './components/06.mvs.vue'
import result from './components/07.result.vue'
// 创建路由
let router = new VueRouter({
  routes:[
    // 配置地址 和 组件的对应关系
    {
      // 地址
      path:"/discovery",
      // 组件
      component:discovery
    },
    {
      // 地址 空地址 
      path:"/",
      // 组件
      component:discovery
    },
    {
      // 地址
      path:"/playlists",
      // 组件
      component:playlists
    },
    {
      // 地址
      path:"/songs",
      // 组件
      component:songs
    },
    {
      // 地址
      path:"/mvs",
      // 组件
      component:mvs
    },
    {
      // 地址
      path:"/result",
      // 组件
      component:result
    }
  ]
})

// 导入 element-ui
import ElementUI from 'element-ui'
// 导入 element-ui 的样式
import 'element-ui/lib/theme-chalk/index.css';
// use一下
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  // 挂载到Vue实例上
  router// router:router
}).$mount('#app')
