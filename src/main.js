import { createApp } from 'vue';
import App from './App.vue';
import { projectAuth } from './firebase/config';
import router from './router';

// styles
import './assets/main.css';

let app;

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(router).mount('#app');
  }
});
