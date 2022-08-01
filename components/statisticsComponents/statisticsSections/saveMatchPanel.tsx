import {Button, Modal} from "antd";
import styles from "../css/savePanel.module.css"
import {useState} from "react";
import SaveMatchModal from "../saveMatchModal";

const SaveMatchPanel = () => {
    const [showSaveMatchModal, setShowSaveMatchModal] = useState(false);
    const [matchSaved, setMatchSaved] = useState(false);

    const confirmExit = () => {
        if (!matchSaved){
            Modal.confirm({
                title: "Are you sure that you want to go to the home screen? This match has not been saved.",
                okType: "danger",
                onOk: () => {
                    window.location.replace("/");

                },
            });
        } else {
            window.location.replace("/");
        }

    };

    const saveMatch = () => {
        setShowSaveMatchModal(true);
    }

    return (
        <div className={styles.btnContainer}>
            <div className={styles.btn}>
            <Button
                className={styles.homeBtn}
                type="primary"
                style={{
                    background: "#480096",
                    border: "#480096",
                }}
                onClick={confirmExit}
            >
                <div className={styles.btnTitle}>Back to Home</div>
            </Button>
            </div>
            <div className={styles.btn}>
            <Button
                type="primary"
                style={{
                    background: "#480096",
                    border: "#480096",
                }}
                onClick={saveMatch}
                className={styles.saveBtn}
                disabled={matchSaved}

            >

                <div className={styles.btnTitle}> Save Match </div>
            </Button>
            </div>
            <SaveMatchModal setShowModal={setShowSaveMatchModal} showModal={showSaveMatchModal} setMatchSaved={setMatchSaved}/>
        </div>

    )
}

export default SaveMatchPanel;
