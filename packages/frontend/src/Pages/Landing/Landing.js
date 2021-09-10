import classes from './Landing.module.scss';
import { Row, Col, Button, Space } from 'antd';
import hero_image from '../../Images/hero_image.svg';
import './style.scss';

const organizations = [
  'Organization 1',
  'Organization 2',
  'Organization 3',
  'Organization 4',
];

const LandingPage = () => {
  return (
    <div className="main-container">
      <div className="header">
        <Row justify="space-between" align="middle">
          <Col className="menu-logo">Fellows</Col>
          <Col>
            <Row>
              <Space size="large">
                <div className="menu-links">Leaderboard</div>
                <div className="menu-links">Events</div>
                <div className="menu-links">Login</div>
                <div className="menu-links">Sign Up</div>
              </Space>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="landing-page">
        <div className="hero-section">
          <Row align="middle" justify="space-around">
            <Col className="hero-left" span={12}>
              <div className="hero-title">A Community Building Platform</div>
              <div className="hero-subtitle">
                A unique and exclusive program for the coder, hackers, designers
                and innovators of tomorrow
              </div>
              <Space>
                <Button type="primary">Participate in Events</Button>
                <Button>Host Events</Button>
              </Space>
            </Col>
            <Col className="hero-right" span={12}>
              <img src={hero_image} alt="" />
            </Col>
          </Row>
          {/* <Row className={classes.Row} type="flex" align="middle" justify="center">
            <Col xs={24} md={11} xl={10} className={classes.Col}>
                <div className={classes.HeroImg}></div>
            </Col>
            <Col xs={24} md={11} xl={10} className={classes.Col}>
                <h1 className={classes.HeroTitle}>This is a Big Tagline Given by Incubate IND</h1>
                <Space>
                    <Button>Participate In Events</Button>
                    <Button type="primary">Host Events</Button>
                </Space>
            </Col>
        </Row>
        <br/><br/><br/><br/>


        <h1 className={classes.Heading}>HOW DO I HOST EVENTS?</h1>
        <Row className={classes.Row} type="flex" align="middle" justify="center" gutter={[40,20]}>
            <Col xs={18} xl={9}>
                <div className={classes.HostEventCard}>
                    <p>You can host events through the organizations you are a part of You can host events through the organizations you are a part of You can host events through the organizations you are a part of</p>
                    <br/><Button block type="primary">Join Communities</Button>
                </div>
            </Col>
            <Col xs={18} xl={9}>
                <div className={classes.HostEventCard}>
                    <p>You can host events through the organizations you are a part of You can host events through the organizations you are a part of You can host events through the organizations you are a part of</p>
                    <br/><Button block type="primary">Create Community</Button>
                </div>
            </Col>
        </Row><br/>

        <Row className={classes.Row} type="flex" align="middle" justify="center" gutter={[40,20]}>
            <Col span={18}>
                <div className={classes.HostEventCard}>
                    <p>You can host events through the organizations you are a part of</p>
                    <div className={classes.OrgList}>
                        {organizations.map(org => <div>{org}</div>)}
                    </div>
                </div>
            </Col>
        </Row> */}
        </div>
        <div className="events-section">
          <div className="section-title">How Do I Host Events?</div>
          <Row type="flex" align="middle" justify="space-between">
            <Col span={12}>
              <div className={classes.HostEventCard}>
                <p>
                  You can host events through the organizations you are a part
                  of You can host events through the organizations you are a
                  part of You can host events through the organizations you are
                  a part of
                </p>
                <br />
                <Button block type="primary">
                  Join Communities
                </Button>
              </div>
            </Col>
            <Col span={12}>
              <div className={classes.HostEventCard}>
                <p>
                  You can host events through the organizations you are a part
                  of You can host events through the organizations you are a
                  part of You can host events through the organizations you are
                  a part of
                </p>
                <br />
                <Button block type="primary">
                  Create Community
                </Button>
              </div>
            </Col>
          </Row>
          <Row
            className={classes.Row}
            type="flex"
            align="middle"
            justify="center"
            gutter={[40, 20]}
          >
            <Col span={18}>
              <div className={classes.HostEventCard}>
                <p>
                  You can host events through the organizations you are a part
                  of
                </p>
                <div className={classes.OrgList}>
                  {organizations.map((org) => (
                    <div>{org}</div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
