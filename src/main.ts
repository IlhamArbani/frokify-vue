import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index';
import './index.css'

import TheHeader from './components/layout/TheHeader.vue'
import BaseCard from './components/ui/BaseCard.vue';
import BaseInput from './components/ui/BaseInput.vue'

const app = createApp(App);

app.component('the-header', TheHeader);
app.component('base-card', BaseCard);
app.component('BaseInput', BaseInput)

app.use(store).mount('#app')
