import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import LayoutHeader from './components/layout/LayoutHeader/LayoutHeader';
import LayoutSider from './components/layout/LayoutSider/LayoutSider';

import AuthRouter from '../src/router/authRouter';
import { LandingPage } from './Pages';

const { Content } = Layout;

const AppRouter = () => {
  const isLoggedIn = false;

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
