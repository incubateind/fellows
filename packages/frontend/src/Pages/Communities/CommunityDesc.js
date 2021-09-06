import React, { useState } from 'react';
import classes from './CommunityDesc.module.css';
import { Button, Modal, Checkbox } from "antd";


const CommunityDescPage = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => setIsModalVisible(true);
    const handleOk = () => setIsModalVisible(false);
    const handleCancel = () => setIsModalVisible(false);


    return (
        <div>
            
            {/* Heading */}
            <div className={classes.HeadingContainer}>
                <div>
                    <h2>Community Name</h2>
                    <h3>Name of the Organization</h3>
                </div>
                <Button type="primary" onClick={showModal}>Become a Member</Button>
            </div>


            <Modal title="FORM TO BE A MEMBER" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Checkbox>Check list of criteria</Checkbox><br/>
                <Checkbox>Further form created by leader </Checkbox><br/>
                <Checkbox>Terms and conditions</Checkbox>
            </Modal>


            {/* Desc About the Community */}
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>


            {/* Member req */}
            <h3>Requirements to be a member</h3>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
    )
}


export default CommunityDescPage