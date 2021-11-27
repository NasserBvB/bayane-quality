import { PlusCircleTwoTone } from '@ant-design/icons';
import { Button } from 'antd';
import { ActionForm } from 'Components/JAP/ActionForm';
import { MyModal } from 'Components/Modal';
import { DocumentForm } from 'Components/RegistreDocumentsInternes/DocumentForm';
import EnregistrementForm from 'Components/RegistreEnregistrements/EnregistrementForm';
import React from 'react';

export const FormsActions = () => {
    const refModal = React.useRef(null);

    const [typeForm, setTypeForm] = React.useState<"action" | "doc" | "event">("action");

    const handleClick = (e: any) => {
        setTypeForm(e.currentTarget.name);
        (refModal.current as any)?.showModal();
    }

    const title = typeForm === "action" ? "Ajouter une action" : typeForm === "doc" ? "Ajouter un document" : "Ajouter un événement";
    const content = typeForm === "action" ? <ActionForm /> : typeForm === "doc" ? <DocumentForm /> : <EnregistrementForm />;

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

            <MyModal title={title} ref={refModal} content={content} />
        </div >
    )
}