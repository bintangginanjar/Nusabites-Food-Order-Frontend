import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../components/common/LoginPage.vue";
import RegisterPage from "../components/common/RegisterPage.vue";
import MainPage from "../components/common/MainPage.vue";
import AdminPage from "../components/dashboard/AdminPage.vue";

const routes = [
    { path: "/", component: MainPage},
    { path: "/login", component: LoginPage},
    { path: "/register", component: RegisterPage},
    { path: "/admin", component: AdminPage}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;