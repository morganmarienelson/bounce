import React from "react";
import {Meter} from "grommet";
import {Grommet, TableBody, TableCell, TableHeader, TableRow, Table} from "grommet/components";
import {Card, Col, Progress, Row, Statistic} from "antd";

interface ServingDataProps {
    state: any;
}

const ServingData: React.FC<ServingDataProps> = ({state}) => {
    const totalServePoints =
        +JSON.stringify(state.context.pointsWonOnServe) +
        +JSON.stringify(state.context.pointsLostOnServe);

    const percentWonOnServe =
        +((+JSON.stringify(state.context.pointsWonOnServe) / (totalServePoints)) * 100).toPrecision(2);

    const firstServePercentage =
        +((+JSON.stringify(state.context.madeFirstServes) / (totalServePoints)) * 100).toPrecision(2);

    const totalHitSecondServes = +JSON.stringify(state.context.madeSecondServes) + +JSON.stringify(state.context.doubleFaults);

    const secondServePercentage = +((+JSON.stringify(state.context.madeSecondServes) / (totalHitSecondServes)) * 100).toPrecision(2);

    return (
        <div>
            <h1>Serving Statistics</h1>
            <Row gutter={16}>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title="Percentage of Points Won on Serve"
                            value={percentWonOnServe}
                            valueStyle={{
                                color: '#3f8600',
                            }}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <Statistic
                            title="Percentage of Points Lost on Serve"
                            value={percentWonOnServe}
                            precision={2}
                            valueStyle={{
                                color: '#cf1322',
                            }}
                            suffix="%"
                        />
                    </Card>
                </Col>
            </Row>
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
