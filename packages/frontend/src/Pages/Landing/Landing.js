import classes from './Landing.module.scss'
import { Row, Col, Button, Space } from 'antd';


const organizations = [
    'Organization 1',
    'Organization 2',
    'Organization 3',
    'Organization 4'
]


const LandingPage = () => {
    return (
    <>
        <Row className={classes.Row} type="flex" align="middle" justify="center">
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
        </Row>
    </>
    )
}


export default LandingPage