
import AppModal from "./components/AppModal.vue";
import { createApp } from 'vue'
import App from './App.vue';

import store from "./store";



const app = createApp(App)
app.component("app-modal", AppModal)
app.use(store)
app.mount('#app')



