import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import TheButton from './components/UI/TheButton.vue';
import TheMessage from './components/UI/TheMessage.vue';
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);
app.component('the-button', TheButton);
app.component('the-message', TheMessage);
app.use(router);
app.use(pinia);
app.mount('#app');
