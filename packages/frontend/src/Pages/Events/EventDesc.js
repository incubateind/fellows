import React, { useState } from 'react';
import classes from './EventDesc.module.css';
import { Button, Modal, Checkbox } from "antd";


const EventDescPage = () => {


    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => setIsModalVisible(true);
    const handleOk = () => setIsModalVisible(false);
    const handleCancel = () => setIsModalVisible(false);


    return (
        <div>
            
            {/* Heading */}
            <div className={classes.HeadingContainer}>
                <div>
                    <h2>Event Name</h2>
                    <h3>Name of the Organization</h3>
                </div>
                <Button type="primary" onClick={showModal}>Participate</Button>
            </div>


            <Modal title="PARTICIPATION FORM" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Checkbox>Push Notifications</Checkbox><br/>
                <Checkbox>Add event to calendar</Checkbox><br/>
                <Checkbox>Clashing events notifications.</Checkbox>
            </Modal>


            {/* Desc About the Community */}
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>


            {/* Member req */}
            <h3>Leaderboard</h3>
            <div className={classes.LeaderboardContainer}>
                <div>1st Position</div>
                <div>2nd Position</div>
                <div>3rd Position</div>
            </div>
        </div>
    )
}


export default EventDescPage