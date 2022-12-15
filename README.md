# Vue3 + vite + ts

从 0 到 1 开发一个自定义的 ui 库，并实现按需引入和完整引入 2 种引入模式。

目录结构：

```
| /config -配置文件
| /package - 组件开发
| /src -组件测试
| README.MD 说明文档
```

- 引用组件（main.js）

```js
/* 按需引入 */
import { LsqButton } from 'standard-vue-cockpit-ui';
import 'standard-vue-cockpit-ui/lib/style.css';
const app = createApp(App);
app.use(LsqButton);

/* 完整引入 */
import componentsAll from 'standard-vue-cockpit-ui';
import 'standard-vue-cockpit-ui/lib/style.css';
const app = createApp(App);
app.use(componentsAll);
```
