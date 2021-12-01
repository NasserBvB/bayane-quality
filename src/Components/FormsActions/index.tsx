import { PlusCircleTwoTone } from '@ant-design/icons';
import { Button, message } from 'antd';
import { ActionForm } from 'Components/JAP/ActionForm';
import { MyModal } from 'Components/Modal';
import { useGlobal } from 'Components/Providers/global.provider';
import { DocumentForm } from 'Components/RegistreDocumentsInternes/DocumentForm';
import { EnregistrementForm } from 'Components/RegistreEnregistrements/EnregistrementForm';
import React from 'react';
import { IAction } from 'types';

export const FormsActions = () => {
    const refModal = React.useRef(null);
    const actionFormRef = React.useRef(null);
    const [typeForm, setTypeForm] = React.useState<"action" | "doc" | "enregistrement">("action");
    const { addAction, currentProcessus, actions } = useGlobal()

    const handleClick = (e: any) => {
        setTypeForm(e.currentTarget.name);
        (refModal.current as any)?.showModal();
    }

    const title = typeForm === "action" ? "Ajouter une action" : typeForm === "doc" ? "Ajouter un document" : "Ajouter un enregistrement";
    const Content = () => typeForm === "action" ? <ActionForm ref={actionFormRef} /> : typeForm === "doc" ? <DocumentForm /> : <EnregistrementForm />;

    const onConfirm = () => {
        if (typeForm === "action")
        {
            (actionFormRef.current as any)?.form.validateFields().then((values: IAction) => {
                addAction({
                    ...values,
                    number_action: parseInt(actions[actions.length - 1].number_action) + 1 + "",
                    processus: currentProcessus
                })

                message.success('Action crée avec succès');
            })
        }

        (refModal.current as any)?.hideModal();
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "0.51rem"
        }}>
            <Button
                name="action"
                style={{
                    display: 'flex',
                    alignItems: "center"
                }}
                type="text"
                onClick={handleClick}
                icon={<PlusCircleTwoTone />}
            >Créer une action</Button>
            <Button
                name="doc"
                style={{
                    display: 'flex',
                    alignItems: "center"
                }}
                type="text"
                onClick={handleClick}
                icon={<PlusCircleTwoTone />}
            >Créer un nouveau document </Button>
            <Button
                name="event"
                style={{
                    display: 'flex',
                    alignItems: "center"
                }}
                type="text"
                onClick={handleClick}
                icon={<PlusCircleTwoTone />}
            >Créer un nouveau enregistrement</Button>

            <MyModal title={title} onConfirm={onConfirm} ref={refModal} content={<Content />} />
        </div >
    )
}