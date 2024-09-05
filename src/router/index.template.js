import { createWebHistory, createRouter } from 'vue-router'
const Home = () => import('../views/index.vue')
const PostShow = () => import('../views/[id].template.vue')

const routes = [
    { path: '/', component: Home },
    { path: '/:id', component: PostShow },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
