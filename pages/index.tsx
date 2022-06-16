import { Button, Checkbox } from "antd";
import { useState } from "react";
import MatchInfoModal from "./components/matchInfoModal";
import WinningModal from "./components/winningModal";

const App = () => {
  const [isStartModalVisible, setIsStartModalVisible] = useState(true);
  const [isWinningModalVisible, setIsWinningModalVisible] = useState(true);

  const handleOkStartModal = () => {
    setIsStartModalVisible(false);
  };

  const handleOkWinningModal = () => {
    setIsWinningModalVisible(false);
  };

  const positionOptions = ["Baseline", "Middle", "Net"];
  const shotOptions = ["Forehand", "Backhand", "Volley", "Overhead"];

  return (
    <>
      <Button style={{ width: 300 }}>Second Serve</Button>
      <Button style={{ width: 300 }}>Double Fault</Button>
      <br />
      <Button style={{ width: 300 }}>Win</Button>
      <Button style={{ width: 300 }}>Loss</Button>
      <br />
      <Checkbox.Group options={positionOptions} defaultValue={["Baseline"]} />
      <br />
      <Button>Forced Error</Button>
      <Button>Unforced Error</Button>
      <br />
      <Checkbox.Group options={shotOptions} defaultValue={["Baseline"]} />
      <MatchInfoModal
        isStartModalVisible={isStartModalVisible}
        handleOkStartModal={handleOkStartModal}
      />
      <WinningModal
        isWinningModalVisible={isWinningModalVisible}
        handleOkWinningModal={handleOkWinningModal}
      />
    </>
  );
};

export default App;
