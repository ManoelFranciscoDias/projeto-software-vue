import { createRouter, createWebHistory } from 'vue-router'
import LoginCliente from '@/views/LoginCliente.vue'
import LoginPeças from '@/views/LoginPeças.vue'
import LoginOrçamentos from '@/views/LoginOrçamentos.vue'
import LoginServiços from '@/views/LoginServiços.vue'
import PeçasUsadas from '@/views/PeçasUsadas.vue'
import RelatoriosSite from '@/views/RelatoriosSite.vue'
import PrincipaisClientes from '@/views/PrincipaisClientes.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [


    
    {
      path: '/clientes',
      name: 'clientes',
      component: LoginCliente,
    },

    {
      path: '/peças',
      name: 'peças',
      component: LoginPeças,

    },
     {

      path: '/orçamentos',
      name: 'orçamentos',
      component: LoginOrçamentos,

    },

    {
      path: '/serviços',
      name: 'serviços',
      component: LoginServiços,
    },
    {
      path: '/peças-usadas',
      name: 'peças-usadas',
      component: PeçasUsadas,
      
    },

    {
      path: '/relatorios',
      name: 'relatorios',
      component: RelatoriosSite,
    },
    {
      path: '/principais-clientes',
      name: 'principais-clientes',
      component: PrincipaisClientes,
    }

  ]
})

export default router
