import { Col, Progress, Row, Tooltip } from "antd";

const MatchOverviewData = () => {
  return (
    <>
      <h1>Total Points Won</h1>
      <Progress
        percent={90}
        strokeColor={"green"}
        trailColor={"red"}
        strokeWidth={12}
      />

      <Row>
        <Col span={12}>
          <h2>Percentage of Points Won by Winners</h2>
          <Progress
            strokeLinecap="butt"
            type="circle"
            percent={75}
            strokeColor={"green"}
            strokeWidth={12}
          />
        </Col>
        <Col span={12}>
          <h2>Percentage of Points Lost by Unforced Errors</h2>
          <Progress
            strokeLinecap="butt"
            type="circle"
            percent={75}
            strokeColor={"red"}
            strokeWidth={12}
          />
        </Col>
      </Row>
    </>
  );
};

export default MatchOverviewData;
