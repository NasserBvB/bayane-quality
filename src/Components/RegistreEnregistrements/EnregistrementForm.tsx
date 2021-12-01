import { Form, Input } from 'antd';
import React from 'react';

export const EnregistrementForm = () => {
    const [form] = Form.useForm();
    return (
        <Form
            form={form}
            layout="vertical"
            name="form_in_modal"
            initialValues={{ modifier: 'public' }}
        >
            <Form.Item name="title" label="Enregistrement à maîtriser">
                <Input type="textarea" placeholder="Enregistrement à maîtriser" />
            </Form.Item>

            <Form.Item name="responsable_classement" label="Resp. Classement">
                <Input type="textarea" placeholder="Resp. Classement" />
            </Form.Item>

            <Form.Item name="lieu_classement" label="Lieu de Classement">
                <Input type="textarea" placeholder="Lieu de Classement" />
            </Form.Item>

            <Form.Item name="mode_classement" label="Mode de Classement">
                <Input type="textarea" placeholder="Mode de Classement" />
            </Form.Item>

            <Form.Item name="duree_classement" label="Durée de Classement">
                <Input type="textarea" placeholder="Durée de Classement" />
            </Form.Item>
        </Form>
    )
}