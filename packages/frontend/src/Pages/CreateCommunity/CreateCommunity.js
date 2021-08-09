// import classes from './CreateCommunity.module.css'

import React from 'react';
import { Form, Input, Button } from 'antd';
const { TextArea } = Input;


const CreateCommunityPage = () => {

    return (
        <React.Fragment>

            <h2>CREATE COMMUNITY FORM</h2>

            <Form layout='vertical' >
                <Form.Item label="Name" extra="Enter the name of your community here.">
                    <Input placeholder="name..." />
                </Form.Item>
                <Form.Item label="Description" extra="Write some info, what is your community exactly.">
                    <TextArea placeholder="description..." />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>

        </React.Fragment>
    )
}


export default CreateCommunityPage