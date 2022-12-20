import path from 'path';
import ts from 'typescript';
const identifiers = [/(^lsq\w+Props$)|(^lsq\w+Emits$)|(^lsq\w+Slots$)|(^lsq\w+Events$)/];
const isVerifyProps = (name, regulars = identifiers) => {
  for (let i of regulars) {
    if (i.test(name)) {
      return true;
    }
  }
  return false;
};
/* 获取index中type的值 */
function getTypeValue(node) {
  let singleMap = _node => {
    let typeName = _node.name.escapedText;
    if (!_node.type.types) {
      return {
        name: typeName,
        value: [_node.type.typeName?.escapedText].filter(one => !!one),
      };
    }
    let values = [];
    _node.type.types.forEach(one => {
      values.push(one.literal?.text || one.typeName?.escapedText);
    });
    return {
      name: typeName,
      value: values,
    };
  };
  if (ts.isTypeAliasDeclaration(node)) {
    if (node.type.types) {
      return singleMap(node);
    } else if (node.type.members) {
      let data = [];
      node.type.members.forEach(one => {
        let dataOne = {
          name: one.name.escapedText,
          comment: one.jsDoc[0].comment,
          value: singleMap(one).value,
        };
        data.push(dataOne);
      });
      return data;
    }
  }
}
function pushProps(node, props, sourceFile) {
  if (ts.isVariableStatement(node)) {
    let name = node.declarationList.declarations[0].name.escapedText;
    if (isVerifyProps(name)) {
      node.declarationList.declarations[0].initializer.properties.forEach(one => {
        let types = one.name?.getText(sourceFile);
        let comment = ((one.jsDoc && one.jsDoc.map(one => one.comment)) || []).pop();
        let type = '';
        let _default = '';
        if (name.indexOf('Props') > -1) {
          if (one.initializer) {
            one.initializer.properties.forEach(propChild => {
              if (propChild.name.escapedText === 'type') {
                type = propChild.initializer.getText(sourceFile);
              } else if (propChild.name.escapedText === 'default') {
                _default = propChild.initializer.getText(sourceFile);
              }
            });
          }
          if (one.name) {
            props.props.push({
              propName: types,
              comment,
              type,
              default: _default,
            });
          } else {
            props.props.push({
              comment,
            });
          }
        } else if (name.indexOf('Emits') > -1) {
          props.emits.push({
            name: types,
            comment,
          });
        } else if (name.indexOf('Slots') > -1) {
          props.slots.push({
            name: types,
            comment,
          });
        } else if (name.indexOf('Events') > -1) {
          props.events.push({
            name: types,
            comment,
          });
        }
      });
    }
  }
}
export function extractFileProps(file) {
  let componentName = file.split(path.sep);
  componentName = componentName.splice(componentName.length - 2, 1).pop();
  const program = ts.createProgram([file], { allowJs: true });
  const sourceFile = program.getSourceFile(file);
  const props = {
    props: [],
    emits: [],
    slots: [],
    events: [],
    other: [],
  };
  ts.forEachChild(sourceFile, node => {
    /* 解析index定义的格式 */
    if (node.moduleSpecifier && node.moduleSpecifier.text === './index') {
      let importText = node.moduleSpecifier.text;

      let childFile = path.resolve(file, '../' + importText + '.ts');
      const programChild = ts.createProgram([childFile], { allowJs: true });
      const sourceFileChild = programChild.getSourceFile(childFile);
      ts.forEachChild(sourceFileChild, childNode => {
        if (ts.isTypeAliasDeclaration(childNode)) {
          let typeName = childNode.name.escapedText;
          let value = getTypeValue(childNode);
          if (!Array.isArray(value)) {
            value = [value];
          }
          props.other.push({
            name: typeName,
            value: value,
          });
        }
      });
    } else {
      /* 解析本文的props等 */
      pushProps(node, props, sourceFile);
    }
  });

  return new Promise(resolve => {
    resolve({ componentName, ...props });
  });
}
