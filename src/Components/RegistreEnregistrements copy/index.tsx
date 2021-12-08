import { Table } from 'antd';
import { DetailProcess } from 'Components/DetailProcess';
import { useGlobal } from 'Components/Providers/global.provider';
import React, { useEffect } from 'react';
import { documents } from 'utils/constants';

export default function RegistreDocumentsInternes() {

    const { currentProcessus } = useGlobal()
    const columns: any[] = [
        {
            title: "Désignation du document",
            dataIndex: 'title',
            key: 'title',
            width: 350,
        },
        {
            title: "Code",
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Version',
            dataIndex: 'version',
            key: 'version',
        },
        {
            title: "Date de la mise en place",
            dataIndex: 'date_creation',
            key: 'date_creation',
            width: 180,
        },
        {
            title: "Rédacteur",
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: "Vérificateur",
            dataIndex: 'verificateur',
            key: 'verificateur',
        },
        {
            title: "Approbateur",
            dataIndex: 'approbateur',
            key: 'approbateur',
        },
        {
            title: "Diffusion/ Point d'utilisation",
            dataIndex: 'diffusion',
            key: 'diffusion',
        },
    ];

    const [data, setData] = React.useState(documents(currentProcessus));

    useEffect(() => {
        setData(documents(currentProcessus));
    }, [currentProcessus]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <DetailProcess />
            <Table
                columns={columns}
                dataSource={data}
                size="large"
                tableLayout="fixed"
                scroll={{ x: 'calc(500px + 50%)', y: 1000 }}
            />
        </>
    )
}