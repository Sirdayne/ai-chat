import { createApp } from 'vue'
import './reset.css'
import './style.sass'
import App from './App.vue'
import router from "./router/router.js";
import ElementPlus from "element-plus";

const app = createApp(App);

app.use(router);
app.use(ElementPlus);

app.mount('#app');
