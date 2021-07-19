import { NavLink } from 'react-router-dom';

// Styling
import { Layout, Menu } from 'antd';
import classes from './HomeNavigation.module.css'

// Extract Components
const { Header, Content } = Layout;



const HomeNavigationWrapper = (props) => {
    const { children } = props

    
    return(
        <Layout className={classes.MainLayout}>
          <Header className={classes.NavHeader}>
            <Menu theme="dark" mode="horizontal">
              <NavLink className={classes.NavItem} to="/profile">Dashboard</NavLink>
            </Menu>
          </Header>
          <Content className={classes.Content}>{children}</Content>
        </Layout>
    )
}


export default HomeNavigationWrapper