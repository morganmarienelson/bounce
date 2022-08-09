import {Button, Modal} from "antd";
import styles from "../../../css/statistics/savePanel.module.scss";
import React, {useEffect, useState} from "react";
import SaveMatchModal from "./saveMatchModal";
import {getSession} from "next-auth/react";
import {useRouter} from "next/router";
import {MatchStats} from "../../../types/matchStats";

interface SaveMatchPanelProps{
    state: MatchStats;
}

const SaveMatchPanel: React.FC<SaveMatchPanelProps> = ({state}) => {
    const [showSaveMatchModal, setShowSaveMatchModal] = useState(false);
    const [signedIn, setSignedIn] = useState(false)
    const router = useRouter();

    useEffect(() => {
        const securePage = async () => {
            const session = await getSession();
            if (!session) {
                setSignedIn(false);
            } else {
                setSignedIn(true);
            }
        }
        securePage();
    }, )

    const confirmExit = () => {
        if (signedIn){
            Modal.confirm({
                title: "Are you sure that you want to go to the home screen? This match has not been saved.",
                okType: "danger",
                onOk: () => {
                    router.push("/");
                },
            });
        } else {
            router.push("/");
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
            {signedIn && (
            <div className={styles.btn}>
            <Button
                className={styles.homeBtn}
                type="primary"
                style={{
                    background: "#480096",
                    border: "#480096",
                }}
                onClick={saveMatch}
            >

                <div className={styles.btnTitle}> Save Match </div>
            </Button>
            </div>
                )}
            <SaveMatchModal setShowModal={setShowSaveMatchModal} showModal={showSaveMatchModal} />
        </div>

    )
}

export default SaveMatchPanel;
