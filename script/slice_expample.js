import { existsSync } from 'fs';
import { readdir, writeFile } from 'fs/promises';
import path from 'path';
import chalk from 'chalk';
import { extractFileProps } from './parse_props.js';
const packagesPath = path.resolve(process.cwd(), './packages');
const onGetDir = filePath => {
  return readdir(filePath).then(resp => {
    return resp;
  });
};
function getTsxFileProps() {
  return new Promise((resolve, reject) => {
    onGetDir(packagesPath).then(async resp => {
      const data = [];
      /* 只解析lsq-开头的文件 */
      resp = resp.filter(one => one.indexOf('lsq-') === 0);
      resp.forEach(async folder => {
        const fileName = `-${folder}`.replace(/-(\w)/g, (_, c) => c.toUpperCase());
        const filePath = path.join(packagesPath, folder, fileName + '.tsx');
        if (existsSync(filePath)) {
          const props = await extractFileProps(filePath);
          data.push(props);
        } else {
          reject(new Error(`${filePath}文件不存在`));
        }
      });
      resolve(data);
    });
  });
}
const writePath = 'public';
async function writeToJSON() {
  const propsData = await getTsxFileProps();
  writeFile(
    path.join(process.cwd(), writePath, 'example_code.json'),
    JSON.stringify(propsData)
  ).then(() => {
    console.log(chalk.cyan('文档构建完成'));
  });
}
writeToJSON();
