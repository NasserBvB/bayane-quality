import { List, Table, Tag, Typography } from 'antd';
import { DetailProcess } from 'Components/DetailProcess';
import { useGlobal } from 'Components/Providers/global.provider';
import dayjs from 'dayjs';
import React from 'react';
import { IAction, IComment } from 'types';

export default function JAP() {
    const { actions } = useGlobal()

    const columns: any[] = [

        {
            title: "N Action",
            dataIndex: 'number_action',
            key: 'number_action',
            width: 180,
        },
        {
            title: "Date",
            dataIndex: 'date_action',
            key: 'date_action',
            width: 80,
            render: (text: string, record: IAction) => dayjs(record.date_action).format('DD/MM/YYYY')
        },
        {
            title: 'Description de la situation problématique',
            dataIndex: 'description',
            key: 'description',
            width: 180,
        },
        {
            title: "Nature de l'action",
            dataIndex: 'nature_action',
            key: 'nature_action',
            width: 180,
        },
        {
            title: "Origine de l'Action ",
            dataIndex: 'origine_action',
            key: 'origine_action',
            width: 180,
        },
        {
            title: "Analyse des causes",
            dataIndex: 'analyse_causes',
            key: 'analyse_causes',
            width: 180,
        },
        {
            title: "Action",
            dataIndex: 'label',
            key: 'label',
            width: 180,
        },
        {
            title: "Responsable de l'action",
            dataIndex: 'responsable',
            key: 'responsable',
            width: 80,
        },
        {
            title: "Autres entités concernées (si besoin)",
            dataIndex: 'autres_entities',
            key: 'autres_entities',
            width: 180,
        },
        {
            title: "Delai",
            dataIndex: 'delai',
            key: 'delai',
            width: 80,
        },
        {
            title: "Date de réalisation",
            dataIndex: 'date_realisation',
            key: 'date_realisation',
            width: 80,
            render: (text: string, record: IAction) => dayjs(record.date_realisation).format('DD/MM/YYYY')
        },
        {
            title: "Délai d'évaluation de l'efficacité",
            dataIndex: 'delai_evaluation_efficacite',
            key: 'delai_evaluation_efficacite',
            width: 80,
        },
        {
            title: "Critères d'évaluation de l'efficacité",
            dataIndex: 'critere_efficacite',
            key: 'critere_efficacite',
            width: 80,
        },
        {
            title: "Efficacité ",
            dataIndex: 'efficacite',
            key: 'efficacite',
            width: 80,
        },
        {
            title: "Commentaire et suivi ",
            key: "commentaires",
            render: (text: any, record: IAction) => {
                return <List
                    key={record.id}
                    dataSource={record.commentaires}
                    renderItem={(item: IComment, idx) => (
                        <List.Item style={{
                            display: 'flex',
                            flexWrap: "wrap",
                        }} key={idx} className="list-item" >
                            <Tag color="green"><strong>{item.author}</strong> {dayjs(item.date).fromNow()}</Tag>
                            <Typography.Text>
                                {item.comment}
                            </Typography.Text>
                        </List.Item>
                    )}
                />
            },
            width: 180,
        },
        {
            title: "Priorité",
            dataIndex: 'priorite',
            key: 'priorite',
            width: 80,
        },
        {
            title: "Avancement",
            dataIndex: 'avancement',
            key: 'avancement',
            width: 80,
        },
    ];
    
    return (
        <>
            <DetailProcess page="Actions"/>
            <Table
                columns={columns}
                dataSource={actions}
                size="small"
                tableLayout="fixed"
                scroll={{ x: 'calc(1000px + 50%)', y: 1000 }}
                showHeader
            />
        </>
    )
}
