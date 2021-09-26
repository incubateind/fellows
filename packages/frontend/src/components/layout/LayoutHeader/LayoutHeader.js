import { Link } from 'react-router-dom';
import { Layout, Dropdown, Avatar, Menu, Row, Col, Space, Drawer } from 'antd';
import classes from './LayoutHeader.module.scss'
import * as Routes from '../../../constants/routes';
import './style.scss'

import {
  MenuOutlined,
} from '@ant-design/icons';
import { useState } from 'react';

const { Header } = Layout;

const LayoutHeader = () => {
  

  const [visible, setVisible]= useState(true);

  const onClickMenu = () => {
    setVisible(!visible);
  }

  return (
    <div className="header">
        <Row justify="space-between" align="middle">
          <Col className="menu-logo">Fellows</Col>
          <Col>
            <Row>
                <div className="menu">
                <Space size="large">
                <div className="menu-link">Leaderboard</div>
                <div className="menu-link">Events</div>
                <div className="menu-link">Login</div>
                <div className="menu-link">Sign Up</div>
                </Space>
                </div>
                <MenuOutlined className="hamburger" onClick={onClickMenu} />
            </Row>
          </Col>
        </Row>
        <Drawer
          title="Menu"
          placement={"left"}
          closable={true}
          onClose={onClickMenu}
          visible={visible}
          width="100%"
         
        >
            <Space size="large" direction="vertical">
           <div className="menu-link">Leaderboard</div>
                <div className="menu-link">Events</div>
                <div className="menu-link">Login</div>
                <div className="menu-link">Sign Up</div>
                </Space>
        </Drawer>
      </div>
  );
};

export default LayoutHeader;
