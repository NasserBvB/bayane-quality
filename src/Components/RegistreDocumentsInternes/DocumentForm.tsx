import { Form, Input } from 'antd';
import React from 'react';

export const DocumentForm = () => {
    const [form] = Form.useForm();
    return (
        <Form
            form={form}
            layout="vertical"
            name="form_in_modal"
            initialValues={{ modifier: 'public' }}
        >
            <Form.Item name="title" label="Désignation du document">
                <Input type="textarea" placeholder="Désignation du document" />
            </Form.Item>

            <Form.Item name="code" label="Code">
                <Input type="textarea" placeholder="Code" />
            </Form.Item>

            <Form.Item name="version" label="Version">
                <Input type="textarea" placeholder="Version" />
            </Form.Item>

            <Form.Item name="date_creation" label="Date de la mise en place">
                <Input type="textarea" placeholder="Date de la mise en place" />
            </Form.Item>

            <Form.Item name="author" label="Rédacteur">
                <Input type="textarea" placeholder="Rédacteur" />
            </Form.Item>

            <Form.Item name="verificateur" label="Vérificateur">
                <Input type="textarea" placeholder="Vérificateur" />
            </Form.Item>

            <Form.Item name="approbateur" label="Approbateur">
                <Input type="textarea" placeholder="Approbateur" />
            </Form.Item>

            <Form.Item name="diffusion" label="Diffusion/ Point d'utilisation">
                <Input type="textarea" placeholder="Diffusion/ Point d'utilisation" />
            </Form.Item>
        </Form>
    )
}