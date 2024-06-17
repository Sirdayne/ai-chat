import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/Main.vue';
import Dashboard from '../pages/Dashboard.vue';
import SignIn from '../pages/SignIn.vue';

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
