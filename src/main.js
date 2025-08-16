import { createApp } from 'vue';
import App from './App.vue'; // SiteLayout yerine App.vue'yi yükleyin
import router from './router';
import store from './store';
import './assets/main.css';

const app = createApp(App); // App.vue root bileşeni olarak monte edilecek
app.use(router);
app.use(store);
app.mount('#app'); // #app elementine monte edilecek
