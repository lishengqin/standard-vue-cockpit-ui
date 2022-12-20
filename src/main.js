import { createApp } from 'vue';

import 'github-markdown-css';
import './style.scss';
import App from './App.vue';

import router from './router';
import LsqUI from '@packages/index';

import PropsRenderDoc from '@/components/PropsRenderDoc';
import ExampleModule from '@/components/ExampleModule';
let app = createApp(App);
app.component('PropsRenderDoc', PropsRenderDoc);
app.component('ExampleModule', ExampleModule);
app.use(LsqUI).use(router).mount('#app');
