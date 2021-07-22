import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import LayoutHeader from './components/layout/LayoutHeader/LayoutHeader';
import LayoutSider from './components/layout/LayoutSider/LayoutSider';

import AuthRouter from '../src/router/authRouter';

const { Content } = Layout;

const AppRouter = () => {
  const isLoggedIn = true;

  return (
    <Router>
      <Layout className="parent-layout">
        {isLoggedIn && <LayoutHeader />}
        <Layout className="child-layout">
          {isLoggedIn && <LayoutSider />}
          <Content className="super-content">
            <AuthRouter />
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default AppRouter;
