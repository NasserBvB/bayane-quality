import { Table } from 'antd';
import { useGlobal } from 'Components/Providers/global.provider';
import dayjs from 'dayjs';
import React from 'react';

export default function HistoriqueModifications() {
    const columns: any[] = [
        {
            title: "Historique des versions",
            dataIndex: 'version',
            key: 'version',
            width: 180,
        },
        {
            title: "Date",
            dataIndex: 'date',
            key: 'date',
            render: (text: any, record: any) => dayjs(record.date).format('DD/MM/YYYY HH:mm:ss')
        },
        {
            title: "Descriptif des modifications",
            dataIndex: 'descriptifs',
            key: 'descriptifs',
        },
    ];

    const { currentProcessus: {historiques_versions} } = useGlobal()
    return (
        <Table
            columns={columns}
            dataSource={historiques_versions}
            size="large"
            tableLayout="fixed"
            scroll={{ x: 'calc(500px + 50%)', y: 1000 }}
        />
    )
}
