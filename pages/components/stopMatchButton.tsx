import { Button, Modal } from "antd";

const StopMatchButton = () => {
  const confirmStop = () => {
    Modal.confirm({
      title: "Are you sure you want to stop the match?",
      okType: "danger",
      onOk: async () => {},
    });
  };

  return (
    <Button
      type="primary"
      danger={true}
      style={{
        width: 100,
        height: 60,
        marginTop: 180,
      }}
      onClick={confirmStop}
    >
      <h2 style={{ color: "white" }}>Stop</h2>
    </Button>
  );
};

export default StopMatchButton;
