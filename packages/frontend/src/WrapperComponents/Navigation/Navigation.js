import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

// Styling
import { Layout, Menu, Button, Divider } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';
import classes from './Navigation.module.css';

// Extracting Components
const { Header, Sider, Content } = Layout;




const NavigationWrapper = ({children}) => {
    const history = useHistory()
    const [collapsed, setCollapsed] = useState(false)
    const toggleHandler = () => setCollapsed(prev => !prev)

    return(
        <Layout className={classes.MainLayout}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className={classes.Logo} />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" onClick={() => history.push('/dashboard')} icon={<UserOutlined/>}>Dashboard</Menu.Item>
                    <Menu.Item key="2" onClick={() => history.push('/analytics')} icon={<UserOutlined/>}>Analytics</Menu.Item>
                    <Menu.Item key="3" onClick={() => history.push('/host_event_form')} icon={<UserOutlined/>}>Host Event Form</Menu.Item>
                    <Divider />
                    <Menu.Item key="4" onClick={() => history.push('/communities')} icon={<UserOutlined/>}>Communities</Menu.Item>
                    <Menu.Item key="5" onClick={() => history.push('/events')} icon={<UserOutlined/>}>Events</Menu.Item>
                    <Divider />
                    <Menu.Item key="6" onClick={() => history.push('/my_participations')} icon={<UserOutlined/>}>My Participations</Menu.Item>
                    <Menu.Item key="7" onClick={() => history.push('/my_communities')} icon={<UserOutlined/>}>My Communities</Menu.Item>
                    <Menu.Item key="8" onClick={() => history.push('/create_community')} icon={<UserOutlined/>}>Create Community</Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className={classes.TopNav}>
                    {collapsed ? 
                        <Button shape="circle" icon={<MenuUnfoldOutlined />} size={2} onClick={toggleHandler} />: 
                        <Button shape="circle" icon={<MenuFoldOutlined />} size={2} onClick={toggleHandler} />
                    }
                </Header>
                <Content className={classes.Background}>{children}</Content>
            </Layout>
        </Layout>
    )
}


export default NavigationWrapper