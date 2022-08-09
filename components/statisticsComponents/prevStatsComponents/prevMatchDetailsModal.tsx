import React from "react";
import "antd/dist/antd.css";
import {Modal} from "antd";
import styles from "../../../css/statistics/prevMatchDetailsModal.module.css";
import {MatchDetails} from "../../../types/matchDetails";

interface PrevMatchDetailsModalProps {
    matchDetails: MatchDetails;
    prevMatchDetailsModalVisible: boolean;
    setPrevMatchDetailsModalVisible: ( prevMatchDetailsModalVisible: boolean) => void;
}

const PrevMatchDetailsModal: React.FC<PrevMatchDetailsModalProps> = ({matchDetails, prevMatchDetailsModalVisible,setPrevMatchDetailsModalVisible}) => {

    const onModalOk = () => {
        setPrevMatchDetailsModalVisible(false);
    }

    return (
        <Modal
            visible={prevMatchDetailsModalVisible}
            onCancel={onModalOk}
            onOk={onModalOk}
            destroyOnClose={true}
        >
            <div className={styles.title}>  {matchDetails.playerName+"'s"} Match Details  </div>
            {/*TODO: put date in database*/}
            <div className={styles.textContainer}>
                <div className={styles.row}>
                    <div className={styles.label}>Date:</div> 9/20/2020 </div>
                <div className={styles.row}>   <div className={styles.label}>Opponent:</div>{matchDetails.opponentName} </div>
                <div className={styles.row}>   <div className={styles.label}>Court Type:</div> {matchDetails.courtType} </div>
                <div className={styles.row}>  <div className={styles.label}>Setting:</div> {matchDetails.setting} </div>
                <div className={styles.row}>  <div className={styles.label}>Format:</div> {matchDetails.matchType} </div>
                <div className={styles.row}>   <div className={styles.label}>Notes:</div> {matchDetails.notes} </div>
            </div>
        </Modal>
    );
};

export default PrevMatchDetailsModal;
