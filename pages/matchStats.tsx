import {Heading} from "grommet/components";
import "antd/dist/antd.css";
import MatchProgressBars from "./components/matchProgressBars";
import {Col, Row} from "antd";
import MatchDataTable from "./components/matchDataTable";

const MatchStats = () => {

    return (
        <div>
            <Heading size="medium" textAlign="center" style={{paddingTop: 10}}>Match Statistics</Heading>
            <Row>
                <Col span={15}>
                    <MatchProgressBars/>
                </Col>
                <Col style={{padding: 20}}>
                    <MatchDataTable/>
                </Col>
            </Row>
        </div>
    );
};

export default MatchStats;
