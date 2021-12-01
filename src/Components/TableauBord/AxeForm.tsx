import { DatePicker, Form, Input } from 'antd';
import React from 'react';

export default function AxeForm() {

    const [form] = Form.useForm();
    return (
        <Form
            form={form}
            layout="vertical"
            name="form_in_modal"
            initialValues={{ modifier: 'public' }}
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px"
            }}
        >
            <Form.Item name="title" label="Intitulé indicateur">
                <Input type="textarea" placeholder="Intitulé indicateur" />
            </Form.Item>
            <Form.Item name="type" label="Type">
                <Input type="textarea" placeholder="Type" />
            </Form.Item>

            <Form.Item name="cible" label="Cible">
                <DatePicker showTime placeholder="Cible" />
            </Form.Item>

            <Form.Item name="seuil_min" label="Seuil minimal">
                <Input type="textarea" placeholder="Seuil minimal" />
            </Form.Item>

            <Form.Item name="seuil_max" label="Seuil maximal">
                <Input type="textarea" placeholder="Seuil maximal" />
            </Form.Item>
        </Form>
    )
}