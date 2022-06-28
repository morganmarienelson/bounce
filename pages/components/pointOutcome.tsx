import { Button, Col } from "antd";
import "antd/dist/antd.css";
import React from "react";
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
  const winningButton = () => {
    setIsWinningModalVisible(true);
  };

  const losingButton = () => {
    setIsLosingModalVisible(true);
  };

  return (
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
  );
};

export default PointOutcomeComponent;
