import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: ()=> import('@/pages/MainHome'),
            children:[
                {
                    path: 'pinia',
                    name: 'pinia',
                    component: () => import('@/pages/RND/PiniaRnd')
                }
            ]
        }

    ]
})

export default router