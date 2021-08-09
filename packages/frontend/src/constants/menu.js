import {
  HomeFilled,
  TeamOutlined,
  FormOutlined,
  AreaChartOutlined,
} from '@ant-design/icons';

import * as Routes from './routes';

const Menu = [
  // Org Details
  {
    name: 'Org Dashboard',
    icon: <HomeFilled className="sider-icon" />,
    route: Routes.ORG_DASHBOARD,
    subMenu: false
  },
  {
    name: 'Org Analytics',
    icon: <HomeFilled className="sider-icon" />,
    route: Routes.ORG_ANALYTICS,
    subMenu: false
  },

  // Chapter Details
  {
    name: 'Dashboard',
    icon: <HomeFilled className="sider-icon" />,
    route: Routes.DASHBOARD,
    subMenu: false,
  },
  {
    name: 'Analytics',
    icon: <AreaChartOutlined className="sider-icon" />,
    route: Routes.ANALYTICS,
    subMenu: false,
  },
  {
    name: 'Host Event',
    icon: <FormOutlined className="sider-icon" />,
    route: Routes.HOST_EVENT,
    subMenu: false,
  },

  // Find
  {
    name: 'Events',
    icon: <TeamOutlined className="sider-icon" />,
    route: Routes.EVENTS,
    subMenu: false,
  },
  {
    name: 'Events Desc (Temp)',
    icon: <TeamOutlined className="sider-icon" />,
    route: Routes.EVENTS_DESC,
    subMenu: false,
  },
  {
    name: 'Communities',
    icon: <TeamOutlined className="sider-icon" />,
    route: Routes.COMMUNITIES,
    subMenu: false,
  },
  {
    name: 'Communities Desc (Temp)',
    icon: <TeamOutlined className="sider-icon" />,
    route: Routes.COMMUNITIES_DESC,
    subMenu: false,
  },

  // Manage
  {
    name: 'My Participations',
    icon: <TeamOutlined className="sider-icon" />,
    route: Routes.MY_PARTICIPATATIONS,
    subMenu: false,
  },
  {
    name: 'My Communities',
    icon: <TeamOutlined className="sider-icon" />,
    route: Routes.MY_COMMUNITIES,
    subMenu: false,
  },
  {
    name: 'Create Communities',
    icon: <TeamOutlined className="sider-icon" />,
    route: Routes.CREATE_COMMUNITY,
    subMenu: false,
  },
  // {
  //   name: 'Subscription',
  //   icon: <TeamOutlined className="sider-icon" />,
  //   subMenu: true,
  //   child: [
  //     {
  //       name: 'Gym Membership',
  //       icon: <TeamOutlined className="sider-icon" />,
  //       route: Routes.CREATE_COMMUNITY,
  //     },
  //     {
  //       name: 'Gym Subscription',
  //       icon: <TeamOutlined className="sider-icon" />,
  //       route: Routes.CREATE_COMMUNITY,
  //     },
  //   ],
  // },
];

export default Menu;
