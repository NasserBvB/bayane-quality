import { Button, Input, List, message, Result, Row } from "antd";
import { useGlobal } from "Components/Providers/global.provider";
import React, { useEffect, useRef, useState } from "react";
import { IFilterResult } from "types";
import { filterAllKindOfData } from "utils/utility";

const initialFilterResult: IFilterResult = {
  actionsDataResult: [],
  usersResult: [],
  rapportAuditResult: [],
  documentsResult: [],
  enregistrementsResult: [],
};
export default function GlobalFilter() {
  const { toggleSearching } = useGlobal();
  const { currentProcessus } = useGlobal();
  const inputRef = useRef(null);

  const [results, setResults] = useState<IFilterResult>(initialFilterResult);

  const onSearch = (value: string) => {
    if (value.length > 0) {
      const res = filterAllKindOfData(value, currentProcessus);
      setResults(res);
    } else {
      setResults(initialFilterResult);
    }
  };

  const handleChange = (e: any) => {
    onSearch(e.target.value);
  };
  useEffect(() => {
    (inputRef.current as any)?.focus();
  }, []);

  const onLoadMore = () =>
    message.info(
      "Nous allons ajouter cette fonctionnalité dés qu'on démarre le projet"
    );

  const loadMore = (
    <div
      style={{
        textAlign: "center",
        marginTop: 12,
        height: 32,
        lineHeight: "32px",
      }}
    >
      <Button onClick={onLoadMore}>loading more</Button>
    </div>
  );

  return (
    <>
      <Row
        style={{ display: "flex", justifyContent: "center" }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Input
          placeholder="Chercher ce que vous voulez...."
          allowClear
          onChange={handleChange}
          style={{
            marginBottom: "1rem",
            height: "4rem"
          }}
        />
        <Button type="primary" onClick={() => toggleSearching()}>
          Retour Home
        </Button>
      </Row>
      {results.actionsDataResult.length === 0 &&
        results.rapportAuditResult.length === 0 &&
        results.enregistrementsResult.length === 0 &&
        results.documentsResult.length === 0 &&
        results.usersResult.length === 0 && (
          <Row
            style={{ display: "flex", justifyContent: "center" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Result
              status="404"
              title="Désolé! Nous n'avons trouvé aucun résultat"
            />
          </Row>
        )}
      {results.actionsDataResult.length > 0 && (
        <Row style={{ display: "flex" }}>
          <List
            style={{
              flex: 1,
            }}
            loadMore={loadMore}
            dataSource={results.actionsDataResult.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  // eslint-disable-next-line
                  title={<a href="#">{item.label}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
            header={<h3 style={{ color: "blue" }}>Actions</h3>}
          />
        </Row>
      )}

      {results.documentsResult.length > 0 && (
        <Row style={{ display: "flex" }}>
          <List
            style={{
              flex: 1,
            }}
            loadMore={loadMore}
            dataSource={results.documentsResult.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  // eslint-disable-next-line
                  title={<a href="#">{item.title}</a>}
                  description={item.author}
                />
              </List.Item>
            )}
            header={<h3 style={{ color: "blue" }}>Documents</h3>}
          />
        </Row>
      )}

      {results.enregistrementsResult.length > 0 && (
        <Row style={{ display: "flex" }}>
          <List
            style={{
              flex: 1,
            }}
            loadMore={loadMore}
            dataSource={results.enregistrementsResult.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  // eslint-disable-next-line
                  title={<a href="#">{item.title}</a>}
                  description={item.responsable_classement}
                />
              </List.Item>
            )}
            header={<h3 style={{ color: "blue" }}>Enregistrements</h3>}
          />
        </Row>
      )}
      {results.usersResult.length > 0 && (
        <Row style={{ display: "flex" }}>
          <List
            style={{
              flex: 1,
            }}
            loadMore={loadMore}
            dataSource={results.usersResult.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    // eslint-disable-next-line
                    <a href="#">
                      {item.firstName} {item.lastName}
                    </a>
                  }
                  description={item.email}
                />
              </List.Item>
            )}
            header={<h3 style={{ color: "blue" }}>Users</h3>}
          />
        </Row>
      )}
      {results.rapportAuditResult.length > 0 && (
        <Row style={{ display: "flex" }}>
          <List
            style={{
              flex: 1,
            }}
            loadMore={loadMore}
            dataSource={results.rapportAuditResult.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  // eslint-disable-next-line
                  title={<a href="#">{item.constat}</a>}
                  description={item.rank}
                />
              </List.Item>
            )}
            header={<h3 style={{ color: "blue" }}>Rapport d'audit</h3>}
          />
        </Row>
      )}
    </>
  );
}
