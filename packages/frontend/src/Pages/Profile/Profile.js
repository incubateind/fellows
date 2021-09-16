// import classes from './Profile.module.css'

import React from 'react';
import { Form, Input, Button } from 'antd';
const { TextArea } = Input;


const ProfilePage = () => {
    return (
        <React.Fragment>

            <h2>MY PROFILE</h2>

            <Form layout='vertical' >
                <Form.Item label="Name" extra="Enter your full name.">
                    <Input placeholder="name..." />
                </Form.Item>
                <Form.Item label="Description" extra="Write something about yourself.">
                    <TextArea placeholder="description..." />
                </Form.Item>
                <Form.Item label="Email" extra="Enter your email id.">
                    <Input type='email' placeholder="email..." />
                </Form.Item>
                <Form.Item label="Phone Number" extra="Enter your phone number.">
                    <Input type='number' placeholder="number..." />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>

        </React.Fragment>
    )
}


export default ProfilePage