import {Meter} from "grommet";
import {
    Grommet,
} from "grommet/components";
import styles from "./css/baselineDataPanel.module.css";
import React from "react";

interface BaselineDataProps {
    state: any;
}

const BaselineData: React.FC<BaselineDataProps> = ({state}) => {

    return (
        <div>
            <div className={styles.heading}>Baseline Statistics</div>
            <div className={styles.body}>
                <div className={styles.row}>

                </div>
            </div>
        </div>
    );
};

export default BaselineData;
