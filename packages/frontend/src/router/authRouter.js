import { Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import { LandingPage, HostEventFormPage, DashboardPage, EventDescPage, AnalyticsPage, CommunitiesPage } from '../Pages';


const AuthRouter = () => {
  return (
    <>
      <Route
        path={ROUTES.LANDING}
        exact
        component={() => <LandingPage />}
      />
      <Route
        path={ROUTES.DASHBOARD}
        exact
        component={() => <DashboardPage />}
      />
      <Route
        path={ROUTES.HOST_EVENT}
        exact
        component={() => <HostEventFormPage />}
      />
      <Route path={ROUTES.EVENTS} exact component={() => <EventDescPage />} />
      <Route
        path={ROUTES.ANALYTICS}
        exact
        component={() => <AnalyticsPage />}
      />
      <Route
        path={ROUTES.COMMUNITIES}
        exact
        component={() => <CommunitiesPage />}
      />
    </>
  );
};

export default AuthRouter;
