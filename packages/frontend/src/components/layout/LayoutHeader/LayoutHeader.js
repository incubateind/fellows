import { Layout, Dropdown, Avatar, Menu } from 'antd';

import {
  CaretDownFilled,
  UserOutlined,
  DingdingOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

const LayoutHeader = () => {
  const menu = (
    <Menu className="profile-dropdown-sec">
      <Menu.Item>Logout</Menu.Item>
    </Menu>
  );

  const rightContainer = () => (
    <div className="header-sub-container-2">
      <Dropdown overlay={menu}>
        <div className="user-img">
          <CaretDownFilled />
          Varun
          <Avatar className="avtaar" size="large" icon={<UserOutlined />} />
        </div>
      </Dropdown>
    </div>
  );

  return (
    <Header className="layout-header">
      <div className="header-sub-container-1">
        <DingdingOutlined style={{ fontSize: '24px' }} />
      </div>
      {rightContainer()}
    </Header>
  );
};

export default LayoutHeader;
