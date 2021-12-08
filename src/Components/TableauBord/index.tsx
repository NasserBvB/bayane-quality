import { PlusOutlined } from "@ant-design/icons";
import { Button, Input, List, Select, Table, Tag, Typography } from "antd";
import { DetailProcess } from "Components/DetailProcess";
import { useGlobal } from "Components/Providers/global.provider";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import faker from "faker";
import React, { useEffect, useState } from "react";
import { IAction, IIndicateur, IInterpretations } from "types";
import { tableauBord } from "utils/constants";
import "./style.css";
const { Option } = Select;
dayjs.extend(relativeTime);

export function TableauBord() {
  const { currentProcessus, actions: actionsList } = useGlobal();
  const [data, setData] = React.useState(
    tableauBord(currentProcessus, actionsList)
  );

  const ListInterpretations = (
    text: string,
    record: IIndicateur,
    index: number
  ) => {
    const [state, setState] = useState({
      action: "Liste des actions",
      inpretation: "",
    });
    const handleChange = (e: any) => {
      setState({
        ...state,
        inpretation: e.target.value,
      });
    };

    const handleSelect = function (value: any) {
      setState({
        ...state,
        action: value,
      });
    };

    const handleSubmit = function (e: any) {
      e.preventDefault();
      let newData = [...data];
      newData = newData.map((item) => {
        if (item.id === record.id && state.action !== "Liste des actions") {
          item.interpretations.push({
            action:
              actionsList.find((action) => action.id === state.action) ||
              actionsList[0],
            content: state.inpretation,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            id: faker.datatype.uuid(),
          });
        }
        return item;
      });

      setState((state) => ({
        action: "",
        inpretation: "",
      }));

      setData(newData);
    };

    return (
      <>
        <List
          key={index}
          dataSource={record.interpretations}
          renderItem={(item: IInterpretations) => (
            <List.Item className="list-item">
              <Tag color="warning">{dayjs(item.createdAt).fromNow()}</Tag>
              <Typography.Text>
                {item.content}
                <Tag color="success" className="action">
                  Action {item.action.number_action}
                </Tag>
              </Typography.Text>
            </List.Item>
          )}
        />
        <Input.Group compact>
          <Input.TextArea
            value={state.inpretation}
            onChange={handleChange}
            placeholder="Votre interpretation"
            style={{ width: "50%" }}
          />
          <Select
            value={state.action}
            onSelect={handleSelect}
            style={{ width: "50%" }}
          >
            {actionsList.map((item: IAction) => (
              <Option key={item.id} value={item.id + ""}>
                Action {item.number_action}
              </Option>
            ))}
          </Select>
          <Button
            style={{ marginTop: "1rem" }}
            type="primary"
            onClick={handleSubmit}
            icon={<PlusOutlined />}
          >
            Ajouter
          </Button>
        </Input.Group>
      </>
    );
  };
  const columns: any[] = [
    {
      title: "AXES D'OBJECTIF QUALITE",
      dataIndex: "axe",
      key: "axe",
      width: 110,
    },
    {
      title: "INTITULE INDICATEUR",
      dataIndex: "title",
      key: "title",
      width: 500,
    },
    {
      title: "TYPE",
      dataIndex: "type",
      key: "type",
      width: 110,
    },
    {
      title: "OBJECTIF 2018",
      children: [
        {
          title: "CIBLE",
          dataIndex: ["objectif", "cible"],
          key: "objectif.cible",
          width: 80,
        },
        {
          title: "SEUIL MIN",
          dataIndex: ["objectif", "seuil_min"],
          key: "objectif.seuil_min",
          width: 80,
        },
        {
          title: "SEUIL MAX",
          dataIndex: ["objectif", "seuil_max"],
          key: "objectif.seuil_max",
          width: 80,
        },
      ],
    },
    {
      title: "Nov 18",
      dataIndex: ["moyenne", "valeur"],
      key: "moyenne.valeur",
      width: 80,
      render: (text: string, record: IIndicateur, index: number) => (
        <Input
          placeholder="pourcentage %"
          defaultValue={record.moyenne.valeur}
        />
      ),
    },
    {
      title: "R18/R17",
      dataIndex: "resultat",
      key: "resultat",
      width: 80,
    },
    {
      title: "Evolution & Tendances",
      dataIndex: "evolution_tendance",
      key: "evolution_tendance",
      width: 80,
    },
    {
      title: "Interprétations et recommandations",
      // dataIndex: 'interpretations',
      key: "interpretations",
      render: ListInterpretations,
      width: 500,
    },
  ];

  useEffect(() => {
    setData(tableauBord(currentProcessus, actionsList));
  }, [currentProcessus]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <DetailProcess page="Tableau de bord" />
      <Table
        columns={columns}
        dataSource={data}
        size="large"
        tableLayout="fixed"
        bordered
        scroll={{ x: "calc(500px + 50%)", y: 1000 }}
      />
    </>
  );
}
