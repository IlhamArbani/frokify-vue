import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index';
import './index.css'

import TheHeader from './components/layout/TheHeader.vue'

const app = createApp(App);

app.component('the-header', TheHeader);

app.use(store).mount('#app')
