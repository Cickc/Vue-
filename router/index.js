import Vue from 'vue'
import VueRouter from 'vue-router'
// import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/Main.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/home/index.vue')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/User/index.vue')
            },
            {
                path: '/mall',
                name: 'mall',
                component: () => import('../views/mall/index.vue')
            },
            {
                path: '/Page1',
                name: 'Page1',
                component: () => import('../views/others/pageOne.vue')
            },
            {
                path: '/Page2',
                name: 'Page2',
                component: () => import('../views/others/pageTwo.vue')
            }
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router