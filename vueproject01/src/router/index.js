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
            children: [
                {
                    path:'status',
                    name: 'Status',
                    component: ()=> import('@/pages/RND/VueStore')
                }
            ]
        }

    ]
})

export default router