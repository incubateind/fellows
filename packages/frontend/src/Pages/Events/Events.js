import classes from './Events.module.css';
import {Row, Col, Button, Card} from 'antd';

const {Meta} = Card;

const EventsPage = () => {
    const liveEvents = [
        {
            "name": "Event 1",
            "organizer": "ANC Community",
        },
        {
            "name": "Event 1",
            "organizer": "ANC Community",
        },
        {
            "name": "Event 1",
            "organizer": "ANC Community",
        },
        {
            "name": "Event 1",
            "organizer": "ANC Community",
        }
    ]

    return (
        <>
            <Row>
                <Col span={14}>
                    <Row>
                        <Col className={classes.btn} span={5}>
                            <Button type="primary">Live Events</Button>
                        </Col>
                        <Col span={6}>
                            <Button>Upcoming Events</Button>
                        </Col>
                        <Col span={3}>
                            <Button>Past Events</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* Event Cards Grid */}
            <div className={classes.eventCards}>
                {liveEvents.map((item, index) => {
                    return (
                        <Card
                        key={index}
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://www.devonblog.com/wp-content/uploads/2021/03/hackathon1.png" />}
                        >
                            <Meta title={item.name} description={item.organizer} />
                        </Card>
                    )
                })}
            </div>
        </>
    )
}


export default EventsPage