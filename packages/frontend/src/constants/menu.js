import {
  TeamOutlined,
  FileProtectOutlined,
  SearchOutlined,
  UserOutlined,
  FundProjectionScreenOutlined
} from '@ant-design/icons';

import * as Routes from './routes';

const Menu = [

  {
    name: 'Org Details',
    icon: <TeamOutlined className="sider-icon" />,
    subMenu: true,
    child: [
      {
        name: 'Org Dashboard',
        route: Routes.ORG_DASHBOARD,
      },
      {
        name: 'Org Analytics',
        route: Routes.ORG_ANALYTICS,
      }
    ],
  },


  {
    name: 'Chapter Details',
    icon: <FileProtectOutlined className="sider-icon" />,
    subMenu: true,
    child: [
      {
        name: 'Dashboard',
        route: Routes.DASHBOARD,
      },
      {
        name: 'Analytics',
        route: Routes.ANALYTICS,
      },
      {
        name: 'Host Event',
        route: Routes.HOST_EVENT,
      }
    ],
  },


  {
    name: 'Find',
    icon: <SearchOutlined className="sider-icon" />,
    subMenu: true,
    child: [
      {
        name: 'Events',
        route: Routes.EVENTS,
      },
      {
        name: 'Events Desc (Temp)',
        route: Routes.EVENTS_DESC,
      },
      {
        name: 'Communities',
        route: Routes.COMMUNITIES,
      },
      {
        name: 'Communities Desc (Temp)',
        route: Routes.COMMUNITIES_DESC,
      }
    ],
  },


  {
    name: 'Manage',
    icon: <UserOutlined className="sider-icon" />,
    subMenu: true,
    child: [
      {
        name: 'My Participations',
        route: Routes.MY_PARTICIPATATIONS,
      },
      {
        name: 'My Communities',
        route: Routes.MY_COMMUNITIES,
      },
      {
        name: 'Create Communities',
        route: Routes.CREATE_COMMUNITY,
      }
    ],
  },


  {
    name: 'Get Updates',
    icon: <FundProjectionScreenOutlined className="sider-icon" />,
    subMenu: true,
    child: [
      {
        name: 'Subscribe Newsletter',
        route: Routes.CREATE_COMMUNITY,
      },
      {
        name: 'Subscribe to push Notifications',
        route: Routes.CREATE_COMMUNITY,
      },
    ],
  },
];

export default Menu;
