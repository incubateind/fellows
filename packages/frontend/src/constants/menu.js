import {
  HomeFilled,
  TeamOutlined,
  FormOutlined,
  AreaChartOutlined,
} from '@ant-design/icons';

import * as Routes from './routes';

const Menu = [
  {
    name: 'Dashboard',
    icon: <HomeFilled className="sider-icon" />,
    route: Routes.DASHBOARD,
    subMenu: false,
  },

  {
    name: 'Analytics',
    icon: <AreaChartOutlined className="sider-icon" />,
    subMenu: false,
  },
  {
    name: 'Host Event',
    icon: <FormOutlined className="sider-icon" />,
    subMenu: false,
  },
  {
    name: 'Communities',
    icon: <TeamOutlined className="sider-icon" />,
    subMenu: false,
  },
  {
    name: 'Events',
    icon: <TeamOutlined className="sider-icon" />,
    subMenu: false,
  },

  //   {
  //     name: 'Subscription',
  //     icon: <AuditOutlined className="sider-icon" />,
  //     subMenu: true,
  //     child: [
  //       {
  //         name: 'Gym Membership',
  //         icon: <SolutionOutlined className="sider-icon" />,
  //         route: Routes.GYM_MEMBERSHIP,
  //       },
  //       {
  //         name: 'Gym Subscription',
  //         icon: <SolutionOutlined className="sider-icon" />,
  //         route: Routes.GYM_SUBSCRIPTION,
  //       },
  //     ],
  //   },
];

export default Menu;
