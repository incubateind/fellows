import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import classes from './LayoutSider.module.scss';

import map from 'lodash/map';
import get from 'lodash/get';
import MenuKeys from '../../../constants/menu';



const { Sider } = Layout;



export default function LayoutSider() {
  const [collapsed, setCollapsed] = useState(false);
  console.log(MenuKeys);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      className={classes.Layout_sider}
    >
      <Menu defaultSelectedKeys={['0']} mode="inline">
        {map(MenuKeys, (m, i) => {
          if (get(m, 'subMenu')) {
            return (
              <Menu.SubMenu
                key={`${i}`}
                icon={get(m, 'icon')}
                title={get(m, 'name')}
              >
                {map(get(m, 'child', []), (subm, x) => (
                  <Menu.Item key={`${i}.${x}`} icon={get(subm, 'icon')}>
                    <Link to={get(subm, 'route')}>{get(subm, 'name')}</Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            );
          }
          return (
            <Menu.Item key={`${i}`} icon={get(m, 'icon')}>
              <Link to={get(m, 'route')}>{get(m, 'name')}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
}
