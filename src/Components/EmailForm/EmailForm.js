import React from 'react';
import {Form, Input, Button, Select, message} from 'antd';
import emailFormStyles from './EmailForm.module.scss';
import PicturesWall from '../PicturesWall/PicturesWall';
import './EmailForm.scss';
import {sendEmail} from '../../Apis';

const {Option} = Select;
const {TextArea} = Input;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const success = () => {
    message.success('Email message sent successfully');
};

const error = () => {
    message.error('This is an error message');
};

export default function EmailForm() {

    const onFinish = values => {
        const emailData = {
            subject: values.subject,
            recipients: values.recipients,
            emailBody: values.emailBody
        };
        sendEmail(emailData)
            .then(success)
            .catch(error);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            className={`email-form ${emailFormStyles.emailForm}`}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >

            <Form.Item
                className={emailFormStyles.formItem}
                label="To"
                colon={false}
                name="recipients"
                labelCol={{'span': 0, 'offset': 4}}
                rules={[
                    {
                        required: true,
                        message: 'Please at least one Recipient mail',
                    },
                ]}
            >
                <Select
                    className={'email-form-control'}
                    mode="tags"
                    placeholder="Recipients mails ex. test@example.com"
                >
                    <Option key={"bishoy@gmail.com"}> bishoy@gmail.com </Option>
                </Select>
            </Form.Item>


            <Form.Item
                className={emailFormStyles.formItem}
                label="Subject"
                colon={false}
                name="subject"
                labelCol={{'span': 0, 'offset': 4}}
                rules={[
                    {
                        required: true,
                        message: 'Please at least one sender mail',
                    },
                ]}
            >
                <Input
                    className={'email-form-control'}
                    mode="tags"
                    placeholder="Email Subject"
                >
                </Input>
            </Form.Item>


            <Form.Item
                className={emailFormStyles.formItem}
                label="Body"
                colon={false}
                name="emailBody"
                labelCol={{'span': 0, 'offset': 4}}
                rules={[
                    {
                        required: false
                    },
                ]}
            >
                <TextArea
                    className={'email-form-control'}
                    placeholder={'Email body'}
                    rows={8}>
                </TextArea>
            </Form.Item>


            <Form.Item
                className={emailFormStyles.formItem}
                label="Attachment"
                colon={false}
                name="Attachment"
            >
                <div className={emailFormStyles.uploadControl}>
                    <PicturesWall/>
                </div>
            </Form.Item>

            <Form.Item
                className={emailFormStyles.mailFormSubmitButton}
            >
                <Button
                    className={emailFormStyles.mailFormSubmitButton}
                    type="primary"
                    htmlType="submit">
                    Send
                </Button>
            </Form.Item>
        </Form>
    );
}