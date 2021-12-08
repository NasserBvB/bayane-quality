import { List, Row } from "antd";
import { DetailProcess } from "Components/DetailProcess";
import { useGlobal } from "Components/Providers/global.provider";
import React from "react";
import Activite from "./Activite";
import Elements from "./Elements";
import HistoriqueModifications from "./HistoriqueModifications";
const style = { padding: "8px 0" };

const titleStyle: any = {
  flex: 1,
  height: "6vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5vh",
  textTransform: "capitalize",
};

export default function CIP() {
  const { currentProcessus } = useGlobal();
  return (
    <>
      <DetailProcess page="Carte d'identité du process" />

      <Row
        style={{ border: "1px solid #6666", marginTop: "2rem" }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <div
          style={{
            ...style,
            ...titleStyle,
          }}
        >
          Carte d'identité du process: {currentProcessus.title}
        </div>
      </Row>
      <Row
        style={{ border: "1px solid #6666", marginTop: "2rem" }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <div style={{ ...style, ...titleStyle }}>
          Historiques de modifications{" "}
        </div>
      </Row>
      <HistoriqueModifications />
      <Row
        style={{ border: "1px solid #6666", marginTop: "2rem", ...titleStyle }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <div style={{ ...style, marginRight: "1rem" }}>Intitulé </div>
        <div style={{ ...style }}>{currentProcessus.title} </div>
      </Row>
      <Row
        style={{
          border: "1px solid #6666",
          marginTop: "2rem",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <div style={{ ...style, color: "blue" }}>Finalité </div>
        <div style={{ ...style }}>
          <List
            dataSource={currentProcessus.finalités}
            renderItem={(item, idx) => (
              <List.Item>
                {idx + 1}: {item}
              </List.Item>
            )}
          />
        </div>
      </Row>
      <Row
        style={{
          border: "1px solid #6666",
          marginTop: "2rem",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <div style={{ ...style, color: "blue" }}>Sponsor Processus </div>
        <div style={{ ...style }}>
          <List
            dataSource={currentProcessus.sponsor}
            renderItem={(item, idx) => (
              <List.Item>
                {idx + 1}: {item}
              </List.Item>
            )}
          />
        </div>
      </Row>
      <Row
        style={{
          border: "1px solid #6666",
          marginTop: "2rem",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <div style={{ ...style, color: "blue" }}>Pilote Processus </div>
        <div style={{ ...style }}>
          <List
            dataSource={currentProcessus.pilote}
            renderItem={(item, idx) => (
              <List.Item>
                {idx + 1}: {item}
              </List.Item>
            )}
          />
        </div>
      </Row>
      <Row
        style={{
          border: "1px solid #6666",
          marginTop: "2rem",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <div style={{ ...style, color: "blue" }}>Pilote Processus </div>
        <div style={{ ...style }}>
          <List
            dataSource={currentProcessus.animateurs}
            renderItem={(item, idx) => (
              <List.Item>
                {idx + 1}: {item}
              </List.Item>
            )}
          />
        </div>
      </Row>
      <Row
        style={{ border: "1px solid #6666", marginTop: "2rem" }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Elements
          data={currentProcessus.elements_entrees}
          type="Elemet d'entrée Processus / interactions"
        />
      </Row>
      <Row
        style={{ border: "1px solid #6666", marginTop: "2rem" }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Elements
          data={currentProcessus.elements_sorties}
          type="Eléments de sortie Processus  / Interactions"
        />
      </Row>
      <Row
        style={{ border: "1px solid #6666", marginTop: "2rem" }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Elements
          data={currentProcessus.besoin_communication}
          type="Besoins en communication "
        />
      </Row>
      <Row
        style={{ border: "1px solid #6666", marginTop: "2rem" }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Elements
          data={currentProcessus.besoin_formation}
          type="Besoin en formation"
        />
      </Row>

      <Row
        style={{ border: "1px solid #6666", marginTop: "2rem" }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Elements
          data={currentProcessus.besoin_recrutement}
          type="esoin en recrutement"
        />
      </Row>

      <Row
        style={{ border: "1px solid #6666", marginTop: "2rem" }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Elements
          data={currentProcessus.besoin_demande_administrative}
          type="Besoins & demandes administratifs"
        />
      </Row>

      <Row
        style={{ border: "1px solid #6666", marginTop: "2rem" }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Elements
          data={currentProcessus.besoin_evaluation}
          type="Besoin en évaluation des performances"
        />
      </Row>
      <Row
        style={{ border: "1px solid #6666", marginTop: "2rem" }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Activite />
      </Row>
    </>
  );
}
