import menus from '../../utils/getComponentsConfig';
export const menuList = [
  {
    name: 'hook',
    zhName: '内置hook',
  },
  {
    name: 'quickstart',
    zhName: '组件使用说明',
  },
  {
    zhName: '组件',
    children: menus,
    expand: true,
  },
];
