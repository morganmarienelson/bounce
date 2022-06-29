import { Heading } from "grommet/components";
import "antd/dist/antd.css";
import MatchOverviewData from "./components/matchOverviewData";
import ServeReturnData from "./components/serveReturnData";
import BaselineData from "./components/baselineData";
import NetData from "./components/netData";
import { Col, Row } from "antd";

const MatchStats = () => {
  return (
    <>
      <Heading size="small">Match Overview</Heading>
      <MatchOverviewData />
      <ServeReturnData />
      <Row>
        <Col span={12}>
          <BaselineData />
        </Col>
        <Col span={12}>
          <NetData />
        </Col>
      </Row>
    </>
  );
};

export default MatchStats;
