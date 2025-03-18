import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../components/LoginPage.vue";
import RegisterPage from "../components/RegisterPage.vue";
import MainPage from "../components/MainPage.vue";

const routes = [
    { path: "/", component: MainPage},
    { path: "/login", component: LoginPage},
    { path: "/register", component: RegisterPage}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;