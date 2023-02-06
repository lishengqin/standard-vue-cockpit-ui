# 驾驶舱大屏项目模板

由于驾驶舱大屏项目愈来愈多，每开发一个新的大屏项目都需要半天时间搭建框架，因此开发 `驾驶舱大屏项目的模板`，该模板使用的技术框架是 `vite+vue3+naive-ui`。通过脚手架下载模板后，只需要开发业务页面，新增路由即可，开箱即用，方便你我他。

## 如何使用大屏项目模板

- 切换源，安装脚手架，然后创建项目，选择大屏模板即可。

```shell
npm config set registry http://verdaccio.zjsszxc.com/

npm install -g anchu-cli

ac create <name> -f 或者 npx ac create <name> -f
```

脚本执行完毕之后，会生成这个项目的文件夹，文件夹目录：

```
| /src
|- /components 公共组件
|-- /CenterDataGroup 中间轴组件
|-- /Container 封装好面板的组件
|-- /Modal 进一步封装好弹窗的组件
|-- /MessageApi 将naive-ui的message绑定在window.$message上，便于在任何地方使用
|- /Layout 框架
|-- /Header 框架的顶部
|- /router 路由
|- /service 接口
|- /views 业务
```
