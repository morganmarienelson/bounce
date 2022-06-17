import { Button, Card, Col, Radio, Row, Statistic } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";

interface PointOutComeProps {
  setIsWinningModalVisible: (isWinningModalVisible: boolean) => void;
  setIsLosingModalVisible: (isLosingModalVisible: boolean) => void;
  setPointsWon: (pointsWon: number) => void;
  setPointsLost: (pointsLost: number) => void;
  pointsLost: number;
  pointsWon: number;
}

const PointOutcomeComponent: React.FC<PointOutComeProps> = ({
  setIsWinningModalVisible,
  setIsLosingModalVisible,
  setPointsWon,
  setPointsLost,
  pointsLost,
  pointsWon,
}) => {
  const [activeTabKey, setActiveTabKey1] = useState("first");

  const winningButton = () => {
    setIsWinningModalVisible(true);
  };

  const losingButton = () => {
    setIsLosingModalVisible(true);
  };

  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
  };

  const tabList = [
    {
      key: "first",
      tab: "First Serve",
    },
    {
      key: "second",
      tab: "Second Serve",
    },
  ];
  const contentList = {
    first: (
      <>
        <Col>
          <Button
            type="primary"
            style={{ width: 300, height: 200, marginRight: 10 }}
            onClick={winningButton}
          >
            Win
          </Button>
          <Button
            danger={true}
            type="primary"
            style={{ width: 300, height: 200 }}
            onClick={losingButton}
          >
            Loss
          </Button>
        </Col>
      </>
    ),
    second: (
      <>
        <Col>
          <Button
            type="primary"
            style={{ width: 300, height: 200, marginRight: 10 }}
            onClick={winningButton}
          >
            Win
          </Button>
          <Button
            style={{ width: 300, height: 200 }}
            type="primary"
            danger={true}
            onClick={losingButton}
          >
            Loss
          </Button>
        </Col>
      </>
    ),
  };

  return (
    <>
      <Card
        style={{
          width: "100%",
        }}
        extra={
          <Button
            style={{ width: 200, height: 50 }}
            type="primary"
            danger={true}
          >
            Double Fault
          </Button>
        }
        title="Serve"
        tabList={tabList}
        activeTabKey={activeTabKey}
        onTabChange={(key) => {
          onTab1Change(key);
        }}
      >
        <div> {contentList[activeTabKey]}</div>
      </Card>
      <br />
    </>
  );
};

export default PointOutcomeComponent;
