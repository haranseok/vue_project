import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/pages/Comm/AdminLogin')
        },
        {
            path: '/home',
            name: 'Home',
            component: ()=> import('@/pages/MainHome'),
            children:[
                {
                    path: 'pinia',
                    name: 'Pinia',
                    component: () => import('@/pages/RND/PiniaRnd')
                },
                {
                    path: 'locale',
                    name: 'Locale',
                    component: () => import('@/pages/RND/LocaleRnd')
                }
            ]
        }

    ]
})

export default router