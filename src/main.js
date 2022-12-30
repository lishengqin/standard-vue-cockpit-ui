import { createApp } from 'vue';

import 'github-markdown-css';
import './style.scss';

import hljs from 'highlight.js'; //导入代码高亮文件
import 'highlight.js/styles/monokai-sublime.css'; //导入代码高亮样式
import App from './App.vue';

import router from './router';
import LsqUI from '@packages/index';

import PropsRenderDoc from '@/components/PropsRenderDoc';
import ExampleModule from '@/components/ExampleModule';
let app = createApp(App);
/* 指令，用于示例代码高亮 */
app.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code');
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});
app.component('PropsRenderDoc', PropsRenderDoc);
app.component('ExampleModule', ExampleModule);
app.use(LsqUI).use(router).mount('#app');
