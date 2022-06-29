import { Row } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import PointOutcomeComponent from "./components/wonLostModal";
import ReturnPanel from "./components/returnPanel";
import ServingPanel from "./components/servingPanel";

const PointInput = () => {
  const [showPointOutcomeModal, setShowPointOutcomeModal] = useState(false);

  const onServeAndReturn = () => {
    setShowPointOutcomeModal(true);
  };

  return (
    <>
      <Row style={{ marginLeft: 35 }}>
        <ReturnPanel onServeAndReturn={onServeAndReturn} />
        <ServingPanel onServeAndReturn={onServeAndReturn} />
      </Row>

      <PointOutcomeComponent
        showPointOutcomeModal={showPointOutcomeModal}
        setShowPointOutcomeModal={setShowPointOutcomeModal}
      />
    </>
  );
};

export default PointInput;
