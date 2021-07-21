import { Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import HostEventFormPage from '../Pages/HostEventForm/HostEventForm';
import DashboardPage from '../Pages/Dashboard/Dashboard';
import EventDescPage from '../Pages/Events/EventDesc';
import AnalyticsPage from '../Pages/Analytics/Analytics';
import CommunitiesPage from '../Pages/Communities/Communities';

const AuthRouter = () => {
  return (
    <>
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
