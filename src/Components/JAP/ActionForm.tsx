import { DatePicker, Form, Input, Radio } from 'antd'
import React from 'react'

export const ActionForm = () => {
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
            <Form.Item name="nature_action" label="Nature de l'action">
                <Input type="textarea" />
            </Form.Item>
            <Form.Item name="origine_action" label="Origine de l'Action">
                <Input type="textarea" />
            </Form.Item>
            <Form.Item name="responsable" label="Responsable de l'action">
                <Input type="textarea" />
            </Form.Item>
            <Form.Item name="analyse_causes" label="Analyse des causes">
                <Input type="textarea" />
            </Form.Item>

            <Form.Item name="date_action" label="Date de l'action">
                <DatePicker showTime />
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