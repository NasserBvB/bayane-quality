import { Row } from 'antd';
import { useGlobal } from 'Components/Providers/global.provider';
import React from 'react';
const style = { padding: '8px 0' };

const titleStyle: any = {
    flex: 1,
    height: "6vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5vh",
    textTransform: "capitalize",
}

const subTitleStyle: any = {
    fontSize: "1.2vh",
    height: "3vh",
}
export default function CIP() {
    const { currentProcessus } = useGlobal()
    return (
        <>
            <Row style={{ border: "1px solid #6666" }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <div style={{
                    ...style, ...titleStyle
                }}>Carte d'identité du process: {currentProcessus.title}</div>

            </Row>
            <Row style={{ border: "1px solid #6666" }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <div style={{ ...style, ...titleStyle, ...subTitleStyle }}>Historiques de modifications </div>
            </Row>
        </>
    )
}
