import { Button, Header, Heading, Menu, Nav } from "grommet/components";
import "antd/dist/antd.css";
import MatchProgressBars from "./components/matchProgressBars";
import { Col, Modal, Row } from "antd";
import MatchDataTable from "./components/matchDataTable";
import { Save } from "grommet-icons";
import { Close } from "grommet-icons";
import { Grommet } from "grommet/components";
import { useState } from "react";
import SaveMatchInfoModal from "./components/saveMatchInfoModal";

interface MatchStatsProps {
  setShowDashboard: (showDashboard: boolean) => void;
}

const MatchStats: React.FC<MatchStatsProps> = ({ setShowDashboard }) => {
  const [showSaveMatchModal, setShowSaveMatchModal] = useState(false);
  const [savedData, setSavedData] = useState(false);

  const onSave = () => {
    setShowSaveMatchModal(true);
  };

  const onExit = () => {
    if (savedData == true) {
      setShowDashboard(true);
    } else {
      Modal.confirm({
        title:
          "Are you sure that you want to exit? The data for this match has not been saved.",
        okType: "danger",
        onOk: () => {
          setShowDashboard(true);
        },
      });
    }
  };

  return (
    <div>
      <Grommet>
        <Header background="light-4" style={{ padding: 20 }}>
          <Heading size="medium" style={{ paddingTop: 10 }}>
            Match Statistics
          </Heading>
          <Nav direction="column">
            <Button
              secondary
              style={{ marginLeft: 63 }}
              icon={<Close />}
              color="#FF5858 "
              hoverIndicator
              onClick={onExit}
            />
            <Button primary icon={<Save />} label="Save" onClick={onSave} />
          </Nav>
        </Header>
      </Grommet>
      <Row>
        <Col span={15}>
          <MatchProgressBars />
        </Col>
        <Col style={{ padding: 20 }}>
          <MatchDataTable />
        </Col>
      </Row>

      <SaveMatchInfoModal
        setSavedData={setSavedData}
        showSaveMatchModal={showSaveMatchModal}
        setShowSaveMatchModal={setShowSaveMatchModal}
      />
    </div>
  );
};

export default MatchStats;
