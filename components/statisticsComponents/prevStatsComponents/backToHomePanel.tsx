import {Button} from "antd";
import styles from "../../../css/statistics/savePanel.module.scss";
import React from "react";
import {useRouter} from "next/router";


const BackToHomePanel = () => {
    const router = useRouter();

    const onExit = () => {
                router.push("/");
    };

    const onBack = () => {
        router.push("/matches");
    };

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
                    onClick={onBack}
                >
                    <div className={styles.btnTitle}>View Another Match</div>
                </Button>
            </div>
            <div className={styles.btn}>
                <Button
                    className={styles.homeBtn}
                    type="primary"
                    style={{
                        background: "#480096",
                        border: "#480096",
                    }}
                    onClick={onExit}
                >
                    <div className={styles.btnTitle}>Back to Home</div>
                </Button>
            </div>
        </div>

    )
}

export default BackToHomePanel;
