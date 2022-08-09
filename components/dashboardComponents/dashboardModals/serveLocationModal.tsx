import React, {useState} from "react";
import "antd/dist/antd.css";
import {Form, Modal, Radio} from "antd";
import styles from "../../../css/dashboard/modal.module.scss";
import {MatchDataEvents} from "../../../enums/matchDataEvents";
import {ServeLocations
} from "../../../enums/serveLocations";

interface ServeLocationModalProps {
    serveLocationModalVisible: boolean;
    setServeLocationModalVisible: (serveLocationModalVisible: boolean) => void;
    pointFinished: () => void;
    send: (event: any) => any;
    pointLog: Array<String>;
}

const ServeLocationModal: React.FC<ServeLocationModalProps> = ({
                                                                   serveLocationModalVisible,
                                                                   setServeLocationModalVisible,
                                                                   pointFinished,
                                                                   send,
                                                                   pointLog,
                                                               }) => {
    const [serveLocation, setServeLocation] = useState("alley");
    const [sideOfCourt, setSideOfCourt] = useState("deuce");

    const onLocationSelected = (e: any) => {
        setServeLocation(e.target.value);
    };

    const onSideOfCourtSelected = (e: any) => {
        setSideOfCourt(e.target.value);
    };

    const onModalOk = () => {
        if (serveLocation == ServeLocations.alley) {
            send({type: MatchDataEvents.IncrementNotReturnedServesToAlley});
            pointLog.push(MatchDataEvents.DecrementNotReturnedServesToAlley);
        } else if (serveLocation == ServeLocations.center) {
            send({type: MatchDataEvents.IncrementNotReturnedServesToCenter});
            pointLog.push(MatchDataEvents.IncrementNotReturnedServesToCenter);
        } else {
            send({type: MatchDataEvents.IncrementNotReturnedServesToBody});
            pointLog.push(MatchDataEvents.IncrementNotReturnedServesToBody);
        }
        if (sideOfCourt == ServeLocations.ad) {
            send({type: MatchDataEvents.IncrementNotReturnedServesAdSide});
            pointLog.push(MatchDataEvents.DecrementNotReturnedServesAdSide);
        } else {
            send({type: MatchDataEvents.IncrementNotReturnedServesDeuceSide});
            pointLog.push(MatchDataEvents.IncrementNotReturnedServesDeuceSide);
        }
        setServeLocationModalVisible(false);
        setServeLocation(ServeLocations.alley);
        setSideOfCourt(ServeLocations.deuce);
        pointFinished();
    };

    const onModalCancel = () => {
        pointLog.pop();
        setServeLocationModalVisible(false);
        setServeLocation(ServeLocations.alley);
        setSideOfCourt(ServeLocations.deuce);
    };

    return (
        <Modal
            visible={serveLocationModalVisible}
            onCancel={onModalCancel}
            onOk={onModalOk}
            destroyOnClose={true}
        >
            <div className={styles.title}>Serve Information</div>
            <Form
                name="Match Information"
                scrollToFirstError
                className={styles.form}
            >
                <div className={styles.label}>Side Of Court:</div>
                <Form.Item>
                    <Radio.Group
                        size="large"
                        value={sideOfCourt}
                        onChange={onSideOfCourtSelected}
                    >
                        <Radio value={ServeLocations.deuce}>
                            <div className={styles.radioLabel}>Deuce Side</div>
                        </Radio>
                        <Radio value={ServeLocations.ad}>
                            <div className={styles.radioLabel}>Ad Side</div>
                        </Radio>
                    </Radio.Group>
                </Form.Item>
                <div className={styles.label}>Serve Location:</div>
                <Form.Item>
                    <Radio.Group
                        size="large"
                        value={serveLocation}
                        onChange={onLocationSelected}
                    >
                        <Radio value={ServeLocations.alley}>
                            <div className={styles.radioLabel}>Alley</div>
                        </Radio>
                        <Radio value={ServeLocations.body}>
                            <div className={styles.radioLabel}>Body</div>
                        </Radio>
                        <Radio value={ServeLocations.center}>
                            <div className={styles.radioLabel}>Center</div>
                        </Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ServeLocationModal;
