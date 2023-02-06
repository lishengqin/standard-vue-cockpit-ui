import { createRouter, createWebHashHistory } from "vue-router"
import componentConfigs from "./utils/getComponentsConfig";
import { definition } from "@packages/commonTypes"
let comChildren = (componentConfigs).map((item: definition) => {
  console.log(item.name, item.state)
  return {
    name: item.name,
    path: `${item.name}`,
    component: async () => item.state === "finish" ? import(`./test/${item.name}/README.md`) : import(`@/components/ComponentDoing.vue`),
    meta: {}
  }
})
const routes = [
  {
    name: "/",
    redirect: "/doc"
  },
  {
    name: "doc",
    path: "/doc",
    redirect: "/doc/" + comChildren[0].name,
    // @ts-ignore
    component: () => import("./doc"),
    children: [
      {
        name: "hook",
        path: `hook`,
        component: () => import("@/views/hook/README.md")
      },
      {
        name: "quickstart",
        path: `quickstart`,
        component: () => import("@/views/quickstart/README.md")
      },
      ...comChildren,

    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  // @ts-ignore
  routes,
});
export default router;