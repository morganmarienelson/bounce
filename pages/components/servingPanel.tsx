import { Button, Col } from "antd";
import StopMatchButton from "./stopMatchButton";

interface ServingPanelProps {
  onServeAndReturn: () => void;
}

const ServingPanel: React.FC<ServingPanelProps> = ({ onServeAndReturn }) => {
  return (
    <>
      <Col span={9}></Col>
      <Col style={{ marginTop: 30 }}>
        <h1>Serve</h1>
      </Col>
      <Col span={10}></Col>
      <Col span={7}>
        <Button type="primary" style={{ width: 300, height: 200 }}>
          <h2 style={{ color: "white" }}>Ace</h2>
        </Button>
      </Col>
      <Col span={7}>
        <Button
          type="primary"
          style={{ width: 300, height: 200 }}
          onClick={onServeAndReturn}
        >
          <h2 style={{ color: "white" }}>In</h2>
        </Button>
      </Col>
      <Col span={7}>
        <Button
          type="primary"
          danger={true}
          style={{ width: 300, height: 200 }}
        >
          <h2 style={{ color: "white" }}>Fault</h2>
        </Button>
      </Col>
      <Col span={3}>
        <StopMatchButton />
      </Col>
    </>
  );
};

export default ServingPanel;
