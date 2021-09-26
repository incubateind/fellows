// import classes from './Landing.module.scss';
import { Row, Col, Button, Space, List, Card, Divider } from 'antd';
import LayoutHeader from '../../components/layout/LayoutHeader/LayoutHeader';
import hero_image from '../../Images/hero_image.svg';
import './style.scss';



const LandingPage = () => {


  const data = [
    {
      title: 'Organization 1',
    },
    {
      title: 'Organization 2',
    },
    {
      title: 'Organization 3',
    },
    {
      title: 'Organization 4',
    },
    {
      title: 'Organization 5',
    },
    {
      title: 'Organization 6',
    },
   
  ];

  const hostWays = [
    {content:'You can host events through the organizations you are a part of You can host events through the organizations you are a part of You can host events through the organizations you are a part of.', buttonText:'Join a community'},
    {content:'You can host events through the organizations you are a part of You can host events through the organizations you are a part of You can host events through the organizations you are a part of.', buttonText:'Create a community'}
  ]


  return (
    <div className="main-container">
     <LayoutHeader/>
      <div className="landing-page">
        <div className="hero-section">
          <Row align="middle" justify="space-around" >
            <Col className="hero-left"  xs={24} xl={8}>
              <div className="hero-title">Fellows - A Community Building Platform</div>
              <div className="hero-subtitle">
                A unique and exclusive program for the coder, hackers, designers
                and innovators of tomorrow.
              </div>
              <Space>
                <Button type="primary">Participate in Events</Button>
                <Button>Host Events</Button>
              </Space>
            </Col>
            <Col className="hero-right"  xs={24} xl={8}>
              <img src={hero_image} alt="" className="hero_image" />
            </Col>
          </Row>
         
        </div>
        <div className="events-section">
          <div className="section-title">How Do I Host Events?</div>
          <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 2,
      lg: 2,
      xl: 2,
      xxl: 2,
    }}
    dataSource={hostWays}
    renderItem={item => (
      <List.Item>
        <Card ><div>{item.content}</div>
        <Divider/>
        <Button type="primary">{item.buttonText}</Button></Card>
      </List.Item>
    )}
  /><br/>
   <div className="section-title">Organisations you can be a part of</div><br/>
          <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 3,
      xxl: 3,
    }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card title={item.title}>The place for cloud developers and architects to come together to learn, discuss and explore the latest advances in cloud technologies.</Card>
      </List.Item>
    )}
  />,
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
