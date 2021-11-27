import { List, Table, Tag, Typography } from 'antd';
import { DetailProcess } from 'Components/DetailProcess';
import { useGlobal } from 'Components/Providers/global.provider';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { IAction, IComment } from 'types';
import { actions } from 'utils/constants';

export default function JAP() {
    const { currentProcessus } = useGlobal()
    const [data, setData] = React.useState(actions(currentProcessus));

    useEffect(() => {
        setData(actions(currentProcessus));
    }, [currentProcessus]) // eslint-disable-line react-hooks/exhaustive-deps

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
            minWidth: 80,
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
            minWidth: 180,
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
            minWidth: 80,
        },
        {
            title: "Autres entités concernées (si besoin)",
            dataIndex: 'autres_entities',
            key: 'autres_entities',
            minWidth: 80,
        },
        {
            title: "Delai",
            dataIndex: 'delai',
            key: 'delai',
            minWidth: 80,
        },
        {
            title: "Date de réalisation",
            dataIndex: 'date_realisation',
            key: 'date_realisation',
            minWidth: 80,
        },
        {
            title: "Délai d'évaluation de l'efficacité",
            dataIndex: 'delai_evaluation_efficacite',
            key: 'delai_evaluation_efficacite',
            minWidth: 80,
        },
        {
            title: "Critères d'évaluation de l'efficacité",
            dataIndex: 'critere_efficacite',
            key: 'critere_efficacite',
            minWidth: 80,
        },
        {
            title: "Efficacité ",
            dataIndex: 'efficacite',
            key: 'efficacite',
            minWidth: 80,
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
            minWidth: 80,
        },
        {
            title: "Avancement",
            dataIndex: 'avancement',
            key: 'avancement',
            minWidth: 80,
        },
    ];
    return (
        <>
            <DetailProcess />
            <Table
                columns={columns}
                dataSource={data}
                size="large"
                tableLayout="fixed"
                scroll={{ x: 'calc(500px + 50%)', y: 1000 }}
                showHeader
            />
        </>
    )
}
