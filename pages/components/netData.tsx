import { Col, Progress, Row, Statistic } from "antd";

const NetData = () => {
  return (
    <>
      <Row style={{ marginTop: 20 }}>
        <Col span={24}>
          <h2>Net Statistics</h2>
          <div style={{ margin: 30 }}>
            <Row>
              <Col span={12}>
                <h4>Points Won at Net</h4>
                <Progress
                  strokeLinecap="butt"
                  type="circle"
                  percent={75}
                  strokeColor={"green"}
                  strokeWidth={12}
                />
              </Col>
              <Col span={12}>
                <h4>Points Won with Forehand Volley</h4>
                <Progress
                  percent={90}
                  strokeColor={"green"}
                  trailColor={"red"}
                  strokeWidth={12}
                />
                <h4>Points Won with Backhand Volley</h4>
                <Progress
                  percent={90}
                  strokeColor={"green"}
                  trailColor={"red"}
                  strokeWidth={12}
                />
                <h4>Points Won with Overhead</h4>
                <Progress
                  percent={90}
                  strokeColor={"green"}
                  trailColor={"red"}
                  strokeWidth={12}
                />
              </Col>
            </Row>
          </div>
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

export default NetData;
