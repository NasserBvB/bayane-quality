import { Table } from 'antd';
import { DetailProcess } from 'Components/DetailProcess';
import { useGlobal } from 'Components/Providers/global.provider';
import React, { useEffect } from 'react';
import { enregistrements } from 'utils/constants';

export default function RegistreEnregistrements() {
    const { currentProcessus } = useGlobal()
    const columns: any[] = [
        {
            title: "Enregistrement à maîtriser",
            dataIndex: 'title',
            key: 'title',
            width: 350,
        },
        {
            title: "Resp. Classement",
            dataIndex: 'responsable_classement',
            key: 'responsable_classement',
        },
        {
            title: 'Lieu de Classement',
            dataIndex: 'lieu_classement',
            key: 'lieu_classement',
        },
        {
            title: "Mode de Classement",
            dataIndex: 'mode_classement',
            key: 'mode_classement',
            width: 180,
        },
        {
            title: "Durée de Classement ",
            dataIndex: 'duree_classement',
            key: 'duree_classement',
        },
    ];

    const [data, setData] = React.useState(enregistrements(currentProcessus));

    useEffect(() => {
        setData(enregistrements(currentProcessus));
    }, [currentProcessus]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <DetailProcess page="Registres des enregistrements internes" />
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
