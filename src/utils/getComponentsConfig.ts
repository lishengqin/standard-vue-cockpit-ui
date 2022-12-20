import { definition } from "@packages/commonTypes";
import { sortBy } from "lodash"
//@ts-ignore
const definitionMap = import.meta.glob('@packages/*/definition.ts', { eager: true });
let rexp = /^\/packages\/(?<path>.*)\/(definition\.ts)$/;
let componentConfigs: definition[] = []
Object.values(definitionMap).forEach((one) => {
  // @ts-ignore
  let _default = one.default as definition
  // 下线状态的组件不放进文档里来
  if (_default.state !== "offline") {
    componentConfigs.push(_default)
  }
})
componentConfigs = sortBy(componentConfigs, one => one.order)
console.log(componentConfigs)
export default componentConfigs