import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RegForm from '@/components/Regform'
import Important from '@/components/Important'
import Boostrap from '@/components/Boostrap'
import MyProject from '@/components/MyProject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/RegForm',
      name: 'RegForm',
      component: RegForm
    } ,  
    {
      path: '/Important',
      name: 'Important',
      component: Important
    },
    {
      path: '/Boostrap',
      name: 'Boostrap',
      component: Boostrap
    },
    {
      path: '/MyProject',
      name: 'MyProject',
      component: MyProject
    }    
  ]
})
