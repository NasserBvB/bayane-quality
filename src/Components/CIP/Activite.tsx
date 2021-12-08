import { List, Table } from "antd";
import { useGlobal } from "Components/Providers/global.provider";
import React from "react";
import { IActivite } from "types";
export default function Activite() {
  const columns: any[] = [
    {
      title: "Activités",
      dataIndex: "activity",
      key: "activity",
      width: 180,
    },
    {
      title: "Responsabilités",
      dataIndex: "responsabilite",
      key: "responsabilite",
      render: (text: any, record: IActivite) => (
        <List
          dataSource={record.responsabilite}
          renderItem={(item, idx) => (
            <List.Item>
              {idx + 1}: {item}
            </List.Item>
          )}
        />
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text: any, record: IActivite) => (
        <List
          dataSource={record.description}
          renderItem={(item, idx) => (
            <List.Item>
              {idx + 1}: {item}
            </List.Item>
          )}
        />
      ),
    },
    {
      title: "Références Internes & Externes  ",
      dataIndex: "reference",
      key: "reference",
      render: (text: any, record: IActivite) => (
        <List
          dataSource={record.reference}
          renderItem={(item, idx) => (
            <List.Item>
              {idx + 1}: {item}
            </List.Item>
          )}
        />
      ),
    },
  ];

  const {
    currentProcessus: { activites },
  } = useGlobal();
  return (
    <Table
      columns={columns}
      dataSource={activites}
      size="large"
      tableLayout="fixed"
      scroll={{ x: "calc(500px + 50%)", y: 1000 }}
    />
  );
}
