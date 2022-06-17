import { Button, Card, Col, Row } from "antd";
import "antd/dist/antd.css";

interface PointOutComeProps {
  setIsWinningModalVisible: (isWinningModalVisible: boolean) => void;
  setIsLosingModalVisible: (isLosingModalVisible: boolean) => void;
}

const PointOutcomeComponent: React.FC<PointOutComeProps> = ({
  setIsWinningModalVisible,
  setIsLosingModalVisible,
}) => {
  const winningButton = () => {
    setIsWinningModalVisible(true);
  };

  const losingButton = () => {
    setIsLosingModalVisible(true);
  };

  return (
    <>
      <Col>
        <Card title="Serving Stats" bordered={false}>
          <Button style={{ width: 300 }}>Second Serve</Button>
          <Button style={{ width: 300 }}>Double Fault</Button>
        </Card>
      </Col>
      <Col>
        <Card title="Point Outcome" bordered={false}>
          <Button style={{ width: 300 }} onClick={winningButton}>
            Win
          </Button>
          <Button style={{ width: 300 }} onClick={losingButton}>
            Loss
          </Button>
        </Card>
      </Col>
    </>
  );
};

export default PointOutcomeComponent;
