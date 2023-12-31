import './bootstrap';
import { createApp } from 'vue';
import App from './vue/app.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import router from './router'; 

library.add(faPlusSquare, faTrash);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);

app.mount('#app');
