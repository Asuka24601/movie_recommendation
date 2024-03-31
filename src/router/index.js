import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { ElMessage } from 'element-plus';
import store from '@/store/index.js';
// import { h } from 'vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/404',
    name: 'ERROR404',
    hidden: true,
    component: () => import(/* webpackChunkName: "error404" */ "../views/Error404View.vue"),
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
    hidden: true
  },
  {
    path: '/movies',
    name: 'movies',
    component: () => import(/* webpackChunkName: "movies" */ '../views/MovieStoreView.vue'),
  },
  {
    path: '/movies/populer',
    name: 'populer',
    component: () => import(/* webpackChunkName: "movies" */ '../views/PopulerMovieView.vue'),
  },
  {
    path: '/movies/comingsoon',
    name: 'comingsoon',
    component: () => import(/* webpackChunkName: "movies" */ '../views/ComingSoonView.vue'),
  },
  {
    path:'/activity',
    name:'activity',
    component: () => import(/* webpackChunkName: "activity" */ '../views/ActivityView.vue')
  },
  {
    path:'/community',
    name:'community',
    component: () => import(/* webpackChunkName: "community" */ '../views/CommunityView.vue')
  },
  {
    path:'/personal/:id',
    name:'personal',
    // mate: {
    //   requireLogin: true
    // },
    component: () => import(/* webpackChunkName: "personal" */ '../views/PersonalView.vue'),
    children: [
      {
        // path: '/personal/info/:id',
        path: '/personal/info/:id',
        name: 'info',
        component: ()=> import(/* webpackChunkName: "personal" */ '../components/personal/Info.vue')
      },
      {
        path: '/personal/comment/:id',
        name: 'comment',
        component: ()=> import(/* webpackChunkName: "personal" */ '../components/personal/comment.vue')
      },
      {
        path: '/personal/collection/:id',
        name: 'collection',
        component: ()=> import(/* webpackChunkName: "personal" */ '../components/personal/collection.vue')
      },
      {
        path: '/personal/like/:id',
        name: 'like',
        component: ()=> import(/* webpackChunkName: "personal" */ '../components/personal/like.vue')
      },
      {
        path: '/personal/recent/:id',
        name: 'recent',
        component: ()=> import(/* webpackChunkName: "personal" */ '../components/personal/recent.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

// 设置登录过期时间（一天）86400000
let expire = 21600000;

// 路由守卫
// 全局守卫，登录拦截
// 进行路由拦截：当没有登陆标识，直接打回登陆页面，如何避免退回到 登陆页呢？
router.beforeEach((to, from, next) => {
  // 从本地缓存中获取保存的 token 信息

  const tokenObj = JSON.parse(window.localStorage.getItem('isLogin'))
  // console.log(tokenObj)
  if (to.path.startsWith("/personal/")) {
    console.log('personal')
    // 如果没有token，强制跳转到登录页面；如果有，则判断token时间是否过期
    if (!tokenObj || !tokenObj.token) {
      next('/login')
    } else {
      let date = new Date().getTime();
      // 当前时间 - token中的登录时间 > 设置的过期时间，为过期；则清除token，并强制跳转至登录页
      // 反之为有效期，则放行
      if (date - tokenObj.startTime > expire) {
        window.localStorage.removeItem('isLogin');
        next('/login')
        ElMessage({
          message: '登录已过期，请重新登录',
          type: 'error'
        })
      } else {
        store.commit('change_user_info', tokenObj.token);
        if(to.path === '/login') next('/')
        else next();
      }
    }
  } else {
    next()
  }
});

export default router
