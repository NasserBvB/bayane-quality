import { Table } from 'antd';
import React from 'react';
import { IElements_entree } from 'types';

export default function Elements({type, data}: {type: string, data: IElements_entree[]}) {
    const columns: any[] = [
        {
            title: type,
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: "Fournisseur (Processus, Partie Intéressée, …)",
            dataIndex: 'fournisseur',
            key: 'fournisseur',
        },
    ];

    return (
        <Table
            columns={columns}
            dataSource={data}
            size="large"
            tableLayout="fixed"
            scroll={{ x: 'calc(500px + 50%)', y: 1000 }}
        />
    )
}
