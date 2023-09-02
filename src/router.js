import { createRouter, createWebHistory } from 'vue-router'
import Home from "./pages/Home.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/category-wise-blog/:categoryId',
            name:'category-wise-product',
            component: () => import('./pages/CategoryWiseBlog.vue'),
        },
        {
            path: '/blog-details/:blogId',
            name:'blog-details',
            component: () => import('./pages/BlogDetails.vue'),
        },
    ],
})
