// import classes from './HostEventForm.module.css'

import React from 'react';
import { Form, Input, Button } from 'antd';
const { TextArea } = Input;


const HostEventFormPage = () => {
    return (
        <React.Fragment>

            <h2>HOST EVENT FORM</h2>

            <Form layout='vertical' >
                <Form.Item label="Name" extra="Enter the name of your event here.">
                    <Input placeholder="name..." />
                </Form.Item>
                <Form.Item label="Description" extra="Write some info, what is your event exactly about.">
                    <TextArea placeholder="description..." />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>

        </React.Fragment>
    )
}


export default HostEventFormPage