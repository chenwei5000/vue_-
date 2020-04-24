import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import Article from '@/components/Article.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/movie',
    component: Home,
    children: [
      {
        path: '/movie',
        component: Movie
      },
      {
        path: '/article',
        component: Article
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
