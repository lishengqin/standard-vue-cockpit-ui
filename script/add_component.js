/* 增加组件脚本，自动生成组件所需的【LsqTest.tsx】【index.scss】【index.ts】【definition.ts】4个文件 */
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
/* 删除已有目录下的文件 */
function deleteFolder(filePath) {
  let files = [];
  if (fs.existsSync(filePath)) {
    files = fs.readdirSync(filePath);
    files.forEach(one => {
      let currentPath = path.resolve(filePath, one);
      if (fs.statSync(currentPath).isDirectory()) {
        deleteFolder(currentPath);
      } else {
        fs.unlinkSync(currentPath);
      }
    });
    fs.rmdirSync(filePath);
  }
}
const { comName, zhName } = await inquirer.prompt([
  {
    name: 'comName',
    type: 'input',
    message: '组件名称',
    default: 'lsq-test',
  },
  {
    name: 'zhName',
    type: 'input',
    message: '组件中文名称',
    default: '测试组件',
  },
]);

const comFolderPath = path.resolve(process.cwd(), './packages/' + comName);
const isExist = fs.existsSync(comFolderPath);
if (isExist) {
  const { isCover } = await inquirer.prompt([
    { type: 'confirm', name: 'isCover', message: `packages目录下已存在${comName}组件，是否覆盖` },
  ]);
  if (!isCover) {
    process.exit();
  }
  deleteFolder(comFolderPath);
}
fs.mkdirSync(comFolderPath);
// 生成组件所需的4个文件
const tsxFileName = comName
  .split('-')
  .map(i => i.replace(i[0], i[0].toUpperCase()))
  .join('');
const comPropName = comName
  .split('-')
  .map((i, index) => (index === 0 ? i : i.replace(i[0], i[0].toUpperCase())))
  .join('');
let comTsx = `
  import { defineComponent } from "vue";
  import "./index.scss";
  export const ${comPropName}Props = { }
  export const ${comPropName}Emits = { }
  export const ${comPropName}Slots = { }
  export const ${comPropName}Events = { }
  export default defineComponent({
    props: ${comPropName}Props,
    emits: ${comPropName}Emits,
    name:"${comName}",
    setup(props, { emit, slots }) {
      return ()=>(<div class="${comName}"></div>)
    }
  })
`;
let definition = `
import { definition } from '../commonTypes';
let _definition: definition = {
  name: "${comName}",
  zhName: '${zhName}',
  state: "finish",
  order: ${
    fs
      .readdirSync(path.resolve(process.cwd(), './packages'))
      .filter(one => one.indexOf('lsq-') === 0).length + 1
  }
}
export default _definition;
`;
let indexTs = `
import { withInstall } from "../withInstall";
import _${comPropName} from "./${tsxFileName}";
export const ${tsxFileName} = withInstall(_${comPropName})
export default ${tsxFileName};
declare module "vue" {
  export interface GlobalComponents {
    ${tsxFileName}: typeof ${tsxFileName};
  }
}
`;
let indexScss = `
.${comName}{}
`;
let files = [
  {
    name: tsxFileName + '.tsx',
    data: comTsx,
  },
  {
    name: 'index.scss',
    data: indexScss,
  },
  {
    name: 'index.ts',
    data: indexTs,
  },
  {
    name: 'definition.ts',
    data: definition,
  },
];
files.forEach(file => {
  fs.writeFileSync(path.resolve(comFolderPath, file.name), file.data);
});

// 同时要在src/test生成对应的文档说明
const testFolderPath = path.resolve(process.cwd(), './src/test/' + comName);
const isExistTest = fs.existsSync(comFolderPath);
if (isExistTest) {
  deleteFolder(testFolderPath);
}
fs.mkdirSync(testFolderPath);
let READMEmd = `
# ${zhName}


<PropsRenderDoc />
`;
fs.writeFileSync(path.resolve(testFolderPath, 'README.md'), READMEmd);
