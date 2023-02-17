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
            component: () => import('@/pages/comm/AdminLogin')
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('@/pages/MainHome'),
            children: [
                {
                    path: 'pinia',
                    name: 'Pinia',
                    component: () => import('@/pages/rnd/PiniaRnd')
                },
                {
                    path: 'locale',
                    name: 'Locale',
                    component: () => import('@/pages/rnd/LocaleRnd')
                },
                {
                    path: 'board',
                    name: 'Board',
                    component: () => import('@/pages/boards/BoardList')
                },
                {
                    path: 'chatting',
                    name: 'Chatting',
                    component: () => import('@/pages/ChattingApp')
                },
                {
                    path: 'chart',
                    name: 'chart',
                    component: () => import('@/pages/rnd/ChartRnd')
                },
            ]
        },
        {
            path: '/naver',
            name: 'naver',
            component: () => import('@/pages/rnd/SocialLoginRnd'),
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('@/pages/rnd/SocialUserInfoRnd')
        }

    ]
})

export default router