import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from 'antd';

import AuthRouter from '../src/router/authRouter';
import { LayoutHeader, LayoutSider } from './components'
import { LandingPage } from './Pages';
import React,{useState} from "react";
import SimpleRouter from './router/simpleRouter';



const { Content } = Layout;



const AppRouter = () => {
  const [loggedIn,setLoggedIn] = useState(false);
 

  return (
    <Router>
      {!loggedIn && <SimpleRouter setLoggedIn={setLoggedIn}/>}
      {loggedIn && (
        <Layout className="parent-layout">
         { <LayoutHeader />}
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