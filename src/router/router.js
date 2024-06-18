import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/main/Main.vue';
import Dashboard from '../pages/Dashboard.vue';
import SignIn from '../auth/SignIn.vue';
import ChatMain from "../pages/ChatMain.vue";
import Rating from "@/pages/Rating.vue";
import DashboardChart from "@/pages/DashboardChart.vue";
import DashboardBuildings from "@/pages/DashboardBuildings.vue";
import DashboardUsers from "@/pages/DashboardUsers.vue";

const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        children: [
            {
                path: '',
                name: 'Main',
                component: Main
            },
            {
                path: 'chat/:id',
                name: 'Chat',
                component: ChatMain
            },
            {
                path: 'rating',
                name: 'Rating',
                component: Rating
            },
            {
                path: 'chart',
                name: 'Chart',
                component: DashboardChart
            },
            {
                path: 'buildings',
                name: 'DashboardBuildings',
                component: DashboardBuildings
            },
            {
                path: 'users',
                name: 'DashboardUsers',
                component: DashboardUsers
            }
        ]
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn,
    },
    {
        path: '/',
        name: 'First',
        redirect: '/sign-in'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
