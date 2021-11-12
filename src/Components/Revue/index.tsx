import { Input, Table } from "antd";
import { DetailProcess } from "Components/DetailProcess";
import { useGlobal } from "Components/Providers/global.provider";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React, { useEffect } from 'react';
import { revue } from 'utils/constants';
import './style.css';
dayjs.extend(relativeTime);

export function Revue() {
    const { currentProcessus } = useGlobal()
    const [data, setData] = React.useState(revue(currentProcessus));
    const columns: any[] = [

        {
            title: "Elément de la revue",
            dataIndex: 'element',
            key: 'element',
        },
        {
            title: () => <div className="satisfaisant">Satisfaisant</div>,
            dataIndex: 'saisfaisant',
            key: 'saisfaisant',
            render: function (text: any, record: any) {
                return <div className="type">
                    <input type="radio" name={record.id} />
                    <div className="content">{record.saisfaisant}</div>
                </div>
            }
        },
        {
            title: () => <div className="ameliorer">A améliorer</div>,
            dataIndex: 'nonSatisfaisant',
            key: 'nonSatisfaisant',
            render: function (text: any, record: any) {
                return <div className="type">
                    <input type="radio" name={record.id} />
                    <div className="content">{record.nonSatisfaisant}</div>
                </div>
            }
        },
        {
            title: "Décisions",
            render: function Render(text: any, record: any) {
                const [decision, setDecision] = React.useState('');
                const handleChange = (e: any) => {
                    setDecision(e.target.value);
                }
                const handleSubmit = (e: any) => {
                    e.preventDefault();
                    let newData = [...data];
                    newData = newData.map(item => {
                        if (item.id === record.id)
                        {
                            item.decisions.push(decision);
                        }
                        return item;
                    })
                    setData(newData);
                    setDecision('')
                }
                return (
                    <>
                        <ul>
                            {record.decisions.map((decision: any, index: any) => {
                                return (
                                    <li key={index}>
                                        - {decision}
                                    </li>
                                );
                            })}
                        </ul>
                        <Input value={decision} placeholder="Decision" onPressEnter={handleSubmit} onChange={handleChange} />
                    </>
                );
            },
            dataIndex: 'decisions',
            key: 'decisions',
        },
    ];

    useEffect(() => {
        setData(revue(currentProcessus));
    }, [currentProcessus])

    return <>
        <DetailProcess />

        <Table
            columns={columns}
            dataSource={data}
            size="large"
            tableLayout="fixed"
            scroll={{ x: 'calc(500px + 50%)', y: 1000 }}
        />
    </>
}
