import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Popover, Row } from "antd";
import { } from "antd/";
import { FormsActions } from "Components/FormsActions";
import { useGlobal } from "Components/Providers/global.provider";
const style = { padding: '8px 0' };

export const DetailProcess = () => {
    const { currentProcessus } = useGlobal()
    return <>
        <Row style={{ border: "1px solid #6666" }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}>
                <div style={style}>INTITULE DU PROCESSUS</div>
            </Col>
            <Col className="gutter-row" span={8}>
                <div style={style}>{currentProcessus.title}</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}></div>
            </Col>
        </Row>
        <Row style={{ border: "1px solid #6666", marginBottom: "10px" }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}>
                <div style={style}>PILOTE DU PROCESSUS</div>
            </Col>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                    {
                        currentProcessus.pilote.map((item: string) => <div key={item} color="blue">{item}</div>)
                    }
                </div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={{ ...style, textTransform: "uppercase" }}>{currentProcessus.code}</div>
            </Col>
        </Row>
        <Row style={{  display: "flex", justifyContent: "flex-end", alignItems: "center" }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Popover  content={FormsActions} trigger="hover" placement="bottom" arrowPointAtCenter>
                <Button type="link"   icon={<PlusOutlined />} >Créer </Button>  
            </Popover>
        </Row>
    </>;
}