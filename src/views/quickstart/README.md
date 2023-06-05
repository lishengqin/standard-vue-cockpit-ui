# 组件快速上手

引入 `standard-vue-cockpit-ui` 组件，有按需引入和完整引入 2 种方式。

### 完整引入

```js
import CockpitUI from 'standard-vue-cockpit-ui';
import 'standard-vue-cockpit-ui/lib/style.css';
createApp(App).use(CockpitUI);
```

### 按需引入

```js
import { LsqButton, LsqModuleBlock } from 'standard-vue-cockpit-ui';
import 'standard-vue-cockpit-ui/lib/style.css';
createApp(App).use(LsqButton).use(LsqModuleBlock);
```
