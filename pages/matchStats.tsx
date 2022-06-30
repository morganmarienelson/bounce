import { Button, Header, Heading, Menu, Nav } from "grommet/components";
import "antd/dist/antd.css";
import MatchProgressBars from "./components/matchProgressBars";
import { Col, Row } from "antd";
import MatchDataTable from "./components/matchDataTable";
import { Save } from "grommet-icons";
import { Grommet } from "grommet/components";
import { useState } from "react";
import SaveMatchInfoModal from "./components/saveMatchInfoModal";

const MatchStats = () => {
  const [showSaveMatchModal, setShowSaveMatchModal] = useState(false);

  const onSave = () => {
    setShowSaveMatchModal(true);
  };

  return (
    <div>
      <Grommet>
        <Header background="light-4" style={{ padding: 20 }}>
          <Heading size="medium" style={{ paddingTop: 10 }}>
            Match Statistics
          </Heading>
          <Nav direction="row">
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
        showSaveMatchModal={showSaveMatchModal}
        setShowSaveMatchModal={setShowSaveMatchModal}
      />
    </div>
  );
};

export default MatchStats;
