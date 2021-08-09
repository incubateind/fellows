import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from 'antd';

import AuthRouter from '../src/router/authRouter';
import { LayoutHeader, LayoutSider } from './components'
import { LandingPage } from './Pages';



const { Content } = Layout;



const AppRouter = () => {
  const isLoggedIn = true;

  return (
    <Router>
      {!isLoggedIn && <LandingPage />}
      {isLoggedIn && (
        <Layout className="parent-layout">
          <LayoutHeader />
          <Layout className="child-layout">
            <LayoutSider />
            <Content className="super-content">
              <AuthRouter />
            </Content>
          </Layout>
        </Layout>
      )}
    </Router>
  );
};

export default AppRouter;