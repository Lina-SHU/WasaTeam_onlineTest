import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Index.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/Home.vue'),
        meta: {
          title: '首頁',
          metaTags: [
            {
              name: 'description',
              content: 'Index -- WasaTeam test'
            }
          ]
        }
      },
      {
        path: '/feedback',
        component: () => import('../views/Feedback.vue'),
        meta: {
          title: '聯絡我們',
          metaTags: [
            {
              name: 'description',
              content: 'Contact Us -- WasaTeam test'
            }
          ]
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
