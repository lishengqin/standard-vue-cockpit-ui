# 组件快速上手

引入 `@anchu/standard-vue-cockpit-components` 组件，有按需引入和完整引入 2 种方式。

### 完整引入

```js
import CockpitUI from '@anchu/standard-vue-cockpit-components';
import '@anchu/standard-vue-cockpit-components/lib/style.css';
createApp(App).use(CockpitUI);
```

### 按需引入

```js
import { AcButton, AcModuleBlock } from '@anchu/standard-vue-cockpit-components';
import '@anchu/standard-vue-cockpit-components/lib/style.css';
createApp(App).use(AcButton).use(AcModuleBlock);
```
