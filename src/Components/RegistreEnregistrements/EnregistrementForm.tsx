import { Form, Input, Radio } from 'antd';
import React from 'react';

export default function EnregistrementForm() {
    const [form] = Form.useForm();
    return (
        <Form
            form={form}
            layout="vertical"
            name="form_in_modal"
            initialValues={{ modifier: 'public' }}
        >
            <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: 'Please input the title of collection!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item name="description" label="Description">
                <Input type="textarea" />
            </Form.Item>
            <Form.Item name="modifier" className="collection-create-form_last-form-item">
                <Radio.Group>
                    <Radio value="public">Public</Radio>
                    <Radio value="private">Private</Radio>
                </Radio.Group>
            </Form.Item>
        </Form>
    )
}