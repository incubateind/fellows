import { Link } from 'react-router-dom';
import { Layout, Dropdown, Avatar, Menu } from 'antd';
import classes from './LayoutHeader.module.scss'
import * as Routes from '../../../constants/routes';

import {
  CaretDownFilled,
  UserOutlined,
  DingdingOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

const LayoutHeader = () => {
  const menu = (
    <Menu>
      <Menu.Item><Link to={Routes.PROFILE}>My Profile</Link></Menu.Item>
      <Menu.Item>Logout</Menu.Item>
    </Menu>
  );

  const rightContainer = () => (
    <div className={classes.Header_sub_container_2}>
      <Dropdown overlay={menu}>
        <div className={classes.User_img}>
          <CaretDownFilled /> Varun
          <Avatar className={classes.Avtaar} size="large" icon={<UserOutlined />} />
        </div>
      </Dropdown>
    </div>
  );

  return (
    <Header className={classes.LayoutHeader}>
      <div className={classes.Header_sub_container_1}>
        <DingdingOutlined style={{ fontSize: '24px' }} />
      </div>
      {rightContainer()}
    </Header>
  );
};

export default LayoutHeader;
