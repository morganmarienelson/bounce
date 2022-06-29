import { Col, Progress, Row, Statistic } from "antd";

const ServeReturnData = () => {
  return (
    <>
      <Row style={{ marginTop: 20 }}>
        <Col span={12}>
          <h2>Serving Statistics</h2>
          <div style={{ margin: 30 }}>
            <h4>Points Won on Serve</h4>
            <Progress percent={70} />
            <h4>First Serve Percentage</h4>
            <Progress percent={30} />
            <h4>Second Serve Percentage</h4>
            <Progress percent={50} />
          </div>
          <Row gutter={16} style={{ margin: 10 }}>
            <Col span={12}>
              <Statistic title="Number of Aces" value={4} />
            </Col>
            <Col span={12}>
              <Statistic title="Number of Double Faults" value={13} />
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <h2>Returning Statistics</h2>
          <h2>Percentage of Points Won on Return</h2>
          <Progress
            strokeLinecap="butt"
            type="circle"
            percent={75}
            strokeColor={"green"}
            strokeWidth={12}
          />
          <Row gutter={16} style={{ margin: 10, marginTop: 40 }}>
            <Col span={24}>
              <Statistic title="Number of Missed Returns" value={13} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ServeReturnData;
