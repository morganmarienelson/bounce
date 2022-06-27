import { Card, Col, Row, Statistic } from "antd";

interface ScoreProps {
  gamesLost: number;
  gamesWon: number;
  pointsLost: number;
  pointsWon: number;
  updateGameScore: () => (string | number)[];
}

const Score: React.FC<ScoreProps> = ({
  gamesLost,
  gamesWon,
  pointsLost,
  pointsWon,
                                       updateGameScore,
}) => {
  return (
    <>
      <Row>
        <Col span={12}>
          <Card>
            <Statistic
              title="Player Set Score"
              value={gamesWon}
              valueStyle={{
                color: "#3f8600",
              }}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Opponent Set Score"
              value={gamesLost}
              valueStyle={{
                color: "#cf1322",
              }}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Card>
            <Statistic
              title="Player Score"
              value={updateGameScore()[0]}
              valueStyle={{
                color: "#3f8600",
              }}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Opponent's Score"
              value={updateGameScore()[1]}
              valueStyle={{
                color: "#cf1322",
              }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Score;
