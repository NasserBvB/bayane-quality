import { Card, Col, Row, Statistic, Table } from "antd";
import { DetailProcess } from "Components/DetailProcess";
import { useGlobal } from "Components/Providers/global.provider";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React, { useEffect } from 'react';
import { rapportAudit } from 'utils/constants';
import { getStatistiques } from "utils/utility";
import './style.css';

dayjs.extend(relativeTime);

const valueStyle: any = (color: string) => ({
    color,
    display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2.5rem"
})

interface IFooterProps {
    total: number;
    minor: number;
    major: number;
    opportunity: number;
}

const Footer = ({ major, minor, opportunity, total }: IFooterProps) => (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
            <Card>
                <Statistic
                    title="Nc Mineure"
                    value={minor}
                    valueStyle={valueStyle('rgb(179, 174, 174)')}
                />
            </Card>
        </Col>
        <Col className="gutter-row" span={6}>
            <Card>
                <Statistic
                    title="Nc Majeure"
                    value={major}
                    valueStyle={valueStyle('rgb(127, 170, 133)')}
                />
            </Card>
        </Col>
        <Col className="gutter-row" span={6}>
            <Card>
                <Statistic
                    title="Opportunité d'Amélioration"
                    value={opportunity}
                    valueStyle={valueStyle('rgb(145, 88, 66)')}
                />
            </Card>
        </Col>
        <Col className="gutter-row" span={6}>
            <Card>
                <Statistic
                    title="Total"
                    value={total}
                    valueStyle={valueStyle('rgb(135, 161, 138)')}
                />
            </Card>
        </Col>

    </Row>
)


export function RapportAudit() {
    const { currentProcessus } = useGlobal()
    const columns: any[] = [
        {
            // title: "AXES D'OBJECTIF QUALITE",
            dataIndex: 'rank',
            key: 'rank',
            render: function (text: string, record: any, index: number) {
                let className = "rank-";
                switch (record.rank)
                {
                    case "NC Mineure":
                        className += "minor";
                        break;
                    case "NC Majeure":
                        className += "major";
                        break;
                    case "Opportunité d'Amélioration":
                        className += "opportunity";
                        break;
                }
                return (
                    <div className={className}>
                        {record.rank}
                    </div>
                );
            }
        },
        {
            title: "CONSTAT",
            dataIndex: 'constat',
            key: 'constat',
            width: 180,
        },
        {
            title: "Réf. Norme",
            dataIndex: 'refNorme',
            key: 'refNorme',
        },
        {
            title: 'Causes',
            dataIndex: 'causes',
            key: 'causes',
        },
        {
            title: "Actions de Corrections",
            dataIndex: 'actions',
            key: 'actions',
            width: 180,
        },
        {
            title: "Responsable",
            dataIndex: 'responsable',
            key: 'responsable',
        },
        {
            title: "Délai",
            dataIndex: 'delai',
            key: 'delai',
        },
    ];

    const [data, setData] = React.useState(rapportAudit(currentProcessus));

    useEffect(() => {
        setData(rapportAudit(currentProcessus));
    }, [currentProcessus]) // eslint-disable-line react-hooks/exhaustive-deps

    const stats = getStatistiques(data);

    return <>
        <DetailProcess />
        <Footer {...stats} />
        <Table
            columns={columns}
            dataSource={data}
            size="large"
            tableLayout="fixed"
            scroll={{ x: 'calc(500px + 50%)', y: 1000 }}
        />
    </>
}

