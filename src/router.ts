import { createRouter, createWebHashHistory } from "vue-router"
import componentConfigs from "./utils/getComponentsConfig";
import { definition } from "@packages/commonTypes"
let comChildren = componentConfigs.map((item: definition) => {
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