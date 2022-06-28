import { Button, Card, Col } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { Undo } from "grommet-icons";

interface PointOutComeProps {
  setIsWinningModalVisible: (isWinningModalVisible: boolean) => void;
  setIsLosingModalVisible: (isLosingModalVisible: boolean) => void;
  undoButton: () => void;
  undoButtonDisabled: boolean;
}

const PointOutcomeComponent: React.FC<PointOutComeProps> = ({
  setIsWinningModalVisible,
  setIsLosingModalVisible,
  undoButton,
  undoButtonDisabled,
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
  const contentList: any = {
    first: (
      <>
        <Col>
          <Button
            type="primary"
            style={{ width: 500, height: 200, marginRight: 10 }}
            onClick={winningButton}
          >
            Win
          </Button>
          <Button
            danger={true}
            type="primary"
            style={{ width: 500, height: 200 }}
            onClick={losingButton}
          >
            Loss
          </Button>
          <Button
            type="default"
            style={{ width: 100, height: 100, margin: 30 }}
            icon={<Undo />}
            disabled={undoButtonDisabled}
            onClick={undoButton}
          />
        </Col>
      </>
    ),
    second: (
      <>
        <Col>
          <Button
            type="primary"
            style={{ width: 500, height: 200, marginRight: 10 }}
            onClick={winningButton}
          >
            Win
          </Button>
          <Button
            danger={true}
            type="primary"
            style={{ width: 500, height: 200 }}
            onClick={losingButton}
          >
            Loss
          </Button>
          <Button
            type="default"
            style={{ width: 100, height: 100, margin: 30 }}
            icon={<Undo />}
            disabled={undoButtonDisabled}
            onClick={undoButton}
          />
        </Col>
      </>
    ),
  };

  return (
    <Card
      style={{
        width: "100%",
      }}
      title="Serve"
      tabList={tabList}
      activeTabKey={activeTabKey}
      onTabChange={(key) => {
        onTab1Change(key);
      }}
    >
      {contentList[activeTabKey]}
    </Card>
  );
};

export default PointOutcomeComponent;
