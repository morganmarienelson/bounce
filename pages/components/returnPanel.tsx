import { Button } from "antd";

interface ReturnPanelProps {
  onServeAndReturn: () => void;
}

const ReturnPanel: React.FC<ReturnPanelProps> = ({ onServeAndReturn }) => {
  return (
    <div style={{ border: "solid" }}>
      <h1>Return</h1>
      <Button
        onClick={onServeAndReturn}
        type="primary"
        style={{ width: 200, height: 200, marginRight: 10, marginLeft: 20 }}
      >
        In
      </Button>
      <Button
        type="primary"
        style={{ width: 200, height: 200, marginRight: 10 }}
      >
        Winner
      </Button>
      <Button
        type="primary"
        danger={true}
        style={{ width: 200, height: 200, marginRight: 10 }}
      >
        Miss
      </Button>
    </div>
  );
};

export default ReturnPanel;
