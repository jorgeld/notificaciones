import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ContactosList from '@/components/contactos/ContactosList'
import EmpresasList from '@/components/empresas/EmpresasList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/contactos',
      name: 'ContactosList',
      component: ContactosList
    },
    {
      path: '/empresas',
      name: 'EmpresasList',
      component: EmpresasList
    }
  ]
})
