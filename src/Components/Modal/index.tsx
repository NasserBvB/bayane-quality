import { Modal } from 'antd';
import React, { useImperativeHandle, useState } from 'react';

type Props = {
    onConfirm?: () => void;
    content?: React.ReactNode;
    title?: string;
}

export const MyModal = React.forwardRef((props: Props, ref: any) => {
    const { content, onConfirm, title } = props;

    const [visible, setVisible] = useState(false)

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    useImperativeHandle(
        ref,
        () => ({
            showModal,
            hideModal
        }),
    )

    return (
        <Modal
            visible={visible}
            title={title}
            onCancel={hideModal}
            onOk={onConfirm}
            okText="Confirm"
            cancelText="Cancel"
        >
            {content && content}
        </Modal>
    )
})