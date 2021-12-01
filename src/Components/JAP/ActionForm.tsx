import { DatePicker, Form, Input } from 'antd';
import React, { useImperativeHandle } from 'react';

export const ActionForm = React.forwardRef(({ }, ref) => { // eslint-disable-line
    const [form] = Form.useForm();

    useImperativeHandle(
        ref,
        () => ({
            form
        })
    )

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
            <Form.Item name="title" label="Title">
                <Input placeholder="Title" />
            </Form.Item>
            <Form.Item name="responsable" label="Responsable de l'action">
                <Input type="textarea" placeholder="Responsable de l'action" />
            </Form.Item>
            <Form.Item name="analyse_causes" label="Analyse des causes">
                <Input type="textarea" placeholder="Analyse des causes" />
            </Form.Item>

            <Form.Item name="date_action" label="Date de l'action">
                <DatePicker placeholder="Date de l'action" />
            </Form.Item>

            <Form.Item name="description" label="Description de la situation problématique">
                <Input type="textarea" placeholder="Description de la situation problématique" />
            </Form.Item>

            <Form.Item name="nature_action" label="Nature de l'action">
                <Input type="textarea" placeholder="Nature de l'action" />
            </Form.Item>

            <Form.Item name="origine_action" label="Origine de l'Action ">
                <Input type="textarea" placeholder="Origine de l'Action" />
            </Form.Item>

            <Form.Item name="autres_entities" label="Autres entités concernées (si besoin)">
                <Input type="textarea" placeholder="Autres entités concernées (si besoin)" />
            </Form.Item>

            <Form.Item name="delai" label="Delai">
                <Input type="textarea" placeholder="Delai" />
            </Form.Item>

            <Form.Item name="date_realisation" label="Date de réalisation">
                <DatePicker placeholder="Date de réalisation" />
            </Form.Item>


            <Form.Item name="delai_evaluation_efficacite" label="Délai d'évaluation de l'efficacité">
                <Input type="textarea" placeholder="Délai d'évaluation de l'efficacité" />
            </Form.Item>


            <Form.Item name="critere_efficacite" label="Critères d'évaluation de l'efficacité">
                <Input type="textarea" placeholder="Critères d'évaluation de l'efficacité" />
            </Form.Item>


            <Form.Item name="efficacite" label="Efficacité">
                <Input type="textarea" placeholder="Efficacité" />
            </Form.Item>

            <Form.Item name="priorite" label="Priorité">
                <Input type="textarea" placeholder="Priorité" />
            </Form.Item>

            <Form.Item name="avancement" label="Avancement">
                <Input type="number" addonAfter="%" placeholder="Avancement" />
            </Form.Item>
        </Form>
    )
})