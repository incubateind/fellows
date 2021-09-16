import { Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import { LandingPage, ProfilePage,
  OrgAnalyticsPage, OrgDashboardPage, // Organization Details
  DashboardPage, AnalyticsPage, HostEventFormPage, // Chapter Details
  EventsPage, EventDescPage, CommunitiesPage, CommunityDescPage, // Find
  MyCommunitiesPage, MyParticipationsPage, CreateCommunityPage // Manage
} from '../Pages';


const AuthRouter = () => {
  return (
    <>
      <Route path={ROUTES.LANDING} exact component={() => <LandingPage />} />
      <Route path={ROUTES.PROFILE} exact component={() => <ProfilePage />} />

      {/* Organization Details */}
      <Route path={ROUTES.ORG_DASHBOARD} exact component={() => <OrgDashboardPage />} />
      <Route path={ROUTES.ORG_ANALYTICS} exact component={() => <OrgAnalyticsPage />} />

      {/* Chapter Details */}
      <Route path={ROUTES.DASHBOARD} exact component={() => <DashboardPage />} />
      <Route path={ROUTES.ANALYTICS} exact component={() => <AnalyticsPage />} />
      <Route path={ROUTES.HOST_EVENT} exact component={() => <HostEventFormPage />} />

      {/* Find */}
      <Route path={ROUTES.EVENTS} exact component={() => <EventsPage />} />
      <Route path={ROUTES.EVENTS_DESC} exact component={() => <EventDescPage />} />
      <Route path={ROUTES.COMMUNITIES} exact component={() => <CommunitiesPage />} />
      <Route path={ROUTES.COMMUNITIES_DESC} exact component={() => <CommunityDescPage />} />

      {/* Manage */}
      <Route path={ROUTES.MY_COMMUNITIES} exact component={() => <MyCommunitiesPage />} />
      <Route path={ROUTES.MY_PARTICIPATATIONS} exact component={() => <MyParticipationsPage />} />
      <Route path={ROUTES.CREATE_COMMUNITY} exact component={() => <CreateCommunityPage />} />

    </>
  );
};

export default AuthRouter;