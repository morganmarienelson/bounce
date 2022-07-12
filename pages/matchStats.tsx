import { Button, Header, Heading, Nav } from "grommet/components";
import "antd/dist/antd.css";
import MatchProgressBars from "./components/matchProgressBars";
import { Modal } from "antd";
import MatchDataTable from "./components/matchDataTable";
import { Save } from "grommet-icons";
import { Close } from "grommet-icons";
import { Grommet } from "grommet/components";
import { useState } from "react";
import SaveMatchInfoModal from "./components/saveMatchInfoModal";
import styles from "./components/css/matchStats.module.css";

interface MatchStatsProps {
  setShowDashboard: (showDashboard: boolean) => void;
  state: any;
}

const MatchStats: React.FC<MatchStatsProps> = ({ setShowDashboard, state }) => {
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
        <Header className={styles.header}>
          <Heading size="medium" className={styles.headingTitle}>
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
            {/*   <Button primary icon={<Save />} label="Save" onClick={onSave} /> */}
          </Nav>
        </Header>
      </Grommet>
      <div className={styles.row}>
        <div className={styles.barCol}>
          <MatchProgressBars state={state} />
        </div>
        <div className={styles.tableCol}>
          <MatchDataTable state={state} />
        </div>
      </div>
      <SaveMatchInfoModal
        setSavedData={setSavedData}
        showSaveMatchModal={showSaveMatchModal}
        setShowSaveMatchModal={setShowSaveMatchModal}
      />
    </div>
  );
};

export default MatchStats;
