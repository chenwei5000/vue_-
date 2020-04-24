import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Movie from '@/components/movie/Movie.vue'
import MovieDetail from '@/components/movie/Detail.vue'
import Article from '@/components/article/Article.vue'
import ArticleDetail from '@/components/article/Detail.vue'

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
      },
      {
        path: '/mdetail/:id',
        component: MovieDetail
      },
      {
        path: '/adetail/:id',
        component: ArticleDetail
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
