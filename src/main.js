import { createApp } from "vue";
import "./style.css";
import router from "./router";
//import PrimeVue from "primevue/config";
//import Aura from '@primeuix/themes/aura';
/*
import 'primevue/resources/themes/lara-light-blue/theme.css'; // Theme
import 'primevue/resources/primevue.min.css'; // Core styles
import 'primeicons/primeicons.css'; // Icons
import 'primeflex/primeflex.css'; // Utility classes
*/
import App from "./App.vue";

//createApp(App).use(router).mount("#app");

const app = createApp(App);
//app.use(PrimeVue);
app.use(router);
app.mount('#app')
