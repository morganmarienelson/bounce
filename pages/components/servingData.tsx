import React from "react";
import {Meter} from "grommet";
import {Grommet, TableBody, TableCell, TableHeader, TableRow, Table} from "grommet/components";
import {Col, Progress, Row} from "antd";

interface ServingDataProps {
    state: any;
}

const ServingData: React.FC<ServingDataProps> = ({state}) => {

    const totalServePoints =
        +JSON.stringify(state.context.pointsWonOnServe) +
        +JSON.stringify(state.context.pointsLostOnServe);

    const firstServePercentage =
        +((+JSON.stringify(state.context.madeFirstServes) / (totalServePoints)) * 100).toPrecision(2);

    const totalHitSecondServes = +JSON.stringify(state.context.madeSecondServes) + +JSON.stringify(state.context.doubleFaults);

    const secondServePercentage = +((+JSON.stringify(state.context.madeSecondServes) / (totalHitSecondServes)) * 100).toPrecision(2);

    return (
        <div>
            <Grommet>
                <h1>First Serve Percentage</h1>
                <Meter
                    values={[{
                        value: firstServePercentage,
                    }]}
                    type="circle"
                    margin="medium"
                    size="small"
                    thickness="medium"
                />
                <h1>Second Serve Percentage</h1>
                <Meter
                    values={[{
                        value: secondServePercentage,
                    }]}
                    type="circle"
                    margin="medium"
                    size="small"
                    thickness="medium"
                />
            </Grommet>
        </div>
    );
};

export default ServingData;
