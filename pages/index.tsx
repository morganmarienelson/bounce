import { useState } from "react";
import MatchInfoModal from "./components/matchInfoModal";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <MatchInfoModal isModalVisible={isModalVisible} handleOk={handleOk} />
    </>
  );
};

export default App;
