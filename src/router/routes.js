const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '/', component: () => import('pages/LoginPage.vue')},
      {path: 'Home', component: () => import('pages/HomePage.vue')},
      {path: 'favorite', component: () => import('pages/FavoritePage.vue')},
      {
        path: '/:catchAll(.*)*',
        component: () => import('pages/Error404.vue')
      }
    ]
  },

]

export default routes
