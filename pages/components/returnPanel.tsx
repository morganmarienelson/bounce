import { Button, Col } from "antd";
import { Undo } from "grommet-icons";

interface ReturnPanelProps {
  onServeAndReturn: () => void;
}

const ReturnPanel: React.FC<ReturnPanelProps> = ({ onServeAndReturn }) => {
  return (
    <>
      <Col span={9}></Col>
      <Col style={{ marginTop: 30 }}>
        <h1>Return</h1>
      </Col>
      <Col span={10}></Col>
      <Col span={7}>
        <Button type="primary" style={{ width: 300, height: 200 }}>
          <h2 style={{ color: "white" }}>Winner</h2>
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
          <h2 style={{ color: "white" }}>Miss</h2>
        </Button>
      </Col>
      <Col span={3}>
        <Button
          type="default"
          style={{ width: 100, height: 100, marginTop: 60 }}
          icon={<Undo />}
        />
      </Col>
    </>
  );
};

export default ReturnPanel;
