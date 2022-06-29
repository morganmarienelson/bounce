import { Col, Progress, Row, Statistic } from "antd";

const BaselineData = () => {
  return (
    <>
      <Row style={{ marginTop: 20 }}>
        <Col span={24}>
          <h2>Baseline Statistics</h2>
          <Row>
            <Col span={12}>
              <h4>Points Won at Baseline</h4>
              <Progress
                strokeLinecap="butt"
                type="circle"
                percent={75}
                strokeColor={"green"}
                strokeWidth={12}
              />
            </Col>
            <Col span={12}>
              <h4>Points Won with Forehand</h4>
              <Progress
                percent={90}
                strokeColor={"green"}
                trailColor={"red"}
                strokeWidth={12}
              />
              <h4>Points Won with Backhand</h4>
              <Progress
                percent={90}
                strokeColor={"green"}
                trailColor={"red"}
                strokeWidth={12}
              />
            </Col>
          </Row>
          <Row gutter={16} style={{ margin: 10 }}>
            <Col span={12}>
              <Statistic title="Number of Winners" value={4} />
            </Col>
            <Col span={12}>
              <Statistic title="Number of Unforced Errors" value={13} />
            </Col>
            <Col span={6}>
              <Statistic title="Number of Forehand Winners" value={4} />
            </Col>
            <Col span={6}>
              <Statistic title="Number of Backhand Winners" value={4} />
            </Col>
            <Col span={6}>
              <Statistic title="Number of Forehand Unforced Errors" value={4} />
            </Col>
            <Col span={6}>
              <Statistic title="Number of Backhand Unforced Errors" value={4} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default BaselineData;
