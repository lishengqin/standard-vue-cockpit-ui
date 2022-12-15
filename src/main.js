import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import ComponentAll from '@packages/index';
createApp(App).use(ComponentAll).mount('#app');
