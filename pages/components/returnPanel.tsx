import { Button, Col, PageHeader } from "antd";
import { position } from "polished";

interface ReturnPanelProps {
  onServeAndReturn: () => void;
}

const ReturnPanel: React.FC<ReturnPanelProps> = ({ onServeAndReturn }) => {
  return (
    <>
      <Col span={10}></Col>
      <Col span={4}>
        <h1>Return</h1>
      </Col>
      <Col span={10}></Col>
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
        <Button type="primary" style={{ width: 400, height: 200 }}>
          Winner
        </Button>
      </Col>
      <Col span={8}>
        <Button
          type="primary"
          danger={true}
          style={{ width: 400, height: 200 }}
        >
          Miss
        </Button>
      </Col>
    </>
  );
};

export default ReturnPanel;
