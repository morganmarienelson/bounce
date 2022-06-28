import { Button } from "antd";

const ServingPanel = () => {
  return (
    <div style={{ border: "solid" }}>
      <h1>Serve</h1>
      <Button
        type="primary"
        style={{ width: 200, height: 200, marginRight: 10 }}
      >
        Ace
      </Button>
      <Button
        danger={true}
        type="primary"
        style={{ width: 200, height: 200, marginRight: 10 }}
      >
        In
      </Button>
      <Button
        danger={true}
        type="primary"
        style={{ width: 200, height: 200, marginRight: 10 }}
      >
        Fault
      </Button>
    </div>
  );
};

export default ServingPanel;
