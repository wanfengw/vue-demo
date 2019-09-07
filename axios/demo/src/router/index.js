import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from 
const HelloWorld = () => import('@/components/HelloWorld')
const demo = () => import('../demo/axios-demo')
const miniUi = () => import('../demo/mini-ui')
const notFound = () => import('../demo/404')
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path: '/',name: 'HelloWorld',component: HelloWorld},
    {path:'/index',name:'index',redirect:'/'},  //url 显示仍是 /
    {path: '/demo-axios',name: 'demo',component: demo},
    {path:'/mini-ui',name: 'miniUi',component:miniUi},
    {path: '*',name: '404',component:notFound}
  ]
})
