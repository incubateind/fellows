import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import LayoutHeader from './components/layout/LayoutHeader/LayoutHeader';
import LayoutSider from './components/layout/LayoutSider/LayoutSider';
import AuthRouter from './router/AuthRouter';

const { Content } = Layout;

const AppRouter = () => {
  const isLoggedIn = true;

  return (
    <div style={{}}>
      <Router>
        <Layout>
          {isLoggedIn && <LayoutSider />}

          <Layout>
            {isLoggedIn && <LayoutHeader />}
            <Content className="main-content">
              <AuthRouter />
            </Content>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
};

export default AppRouter;
