import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import('@/views/HomeView.vue'),

    },
    {
      name: "acessorios",
      path: "/acessorios",
      component: () => import('@/views/AcessorioView.vue'),
    },    {
      name: "categorias",
      path: "/categorias",
      component: () => import('@/views/CategoriaView.vue'),
    },    {
      name: "cores",
      path: "/cores",
      component: () => import('@/views/CorView.vue'),
    },    
    {
      name: "marcas",
      path: "/marcas",
      component: () => import('@/views/MarcaView.vue'),
    },    
    {
      name: "modelos",
      path: "/modelos",
      component: () => import('@/views/ModeloView.vue'),
    },    
    {
      name: "veiculos",
      path: "/veiculos",
      component: () => import('@/views/VeiculoView.vue'),
    },
    {
      name: "login",
      path: "/login",
      component: () => import('@/views/LoginView.vue'),
    },
    {
      name: "logout",
      path: "/logout",
      component: () => import('@/views/LogoutView.vue'),
    }

  ]
})

export default router