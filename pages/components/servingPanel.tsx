import { Button, Col, Row } from "antd";

interface ServingPanelProps {
  onServeAndReturn: () => void;
}

const ServingPanel: React.FC<ServingPanelProps> = ({ onServeAndReturn }) => {
  return (
    <>
      <Col span={10}></Col>
      <Col span={4}>
        <h1>Serve</h1>
      </Col>
      <Col span={10}></Col>
      <Col span={8}>
        <Button type="primary" style={{ width: 400, height: 200 }}>
          Ace
        </Button>
      </Col>
      <Col span={8}>
        <Button
          onClick={onServeAndReturn}
          type="primary"
          style={{ width: 400, height: 200 }}
        >
          In
        </Button>
      </Col>
      <Col span={8}>
        <Button
          danger={true}
          type="primary"
          style={{ width: 400, height: 200 }}
        >
          Fault
        </Button>
      </Col>
    </>
  );
};

export default ServingPanel;
