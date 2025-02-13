import './bootstrap';
require('./bootstrap');

import { createApp } from 'vue';
import ChatComponent from './components/ChatComponent.vue';

// Initialisation de l'application Vue
const app = createApp({
    components: {
        'chat-component': ChatComponent
    }
});

// Monté sur l'élément avec l'ID 'app'
app.mount('#app');
