import {Col, Progress, Row, Tooltip} from "antd";

const MatchOverviewData = () => {

    const checkSuccess = (value: number) => {
        if (value >= 50) {
            return "green";
        } else {
            return "red";
        }
    }

    const checkError = (value: number) => {
        if (value >= 50) {
            return "purple";
        } else {
            return "green";
        }
    }

    const checkSecondServe = (value: number) => {
        if (value >= 70) {
            return "green";
        } else {
            return "red";
        }
    }

    const testMatchData =
        {
            percentPointsWon: 20,
            percentWonByWinners: 30,
            percentLostByUnforced: 40,
            percentWonServe: 50,
            firstServePercent: 30,
            secondServePercent: 70,
            pointsLostOnReturn: 40,
            percentMissedReturns: 30,
            pointsWonBaseline: 80,
            pointsWonWithForehand: 34,
            pointsWonWithBackhand: 65,
            pointsWonAtNet: 40,
            pointsWonForehandVolley: 60,
            pointsWonBackhandVolley: 30,
            pointsWonOverhead: 30,
        }


    return (
        <>
            <div style={{padding: 25}}>
                <h4>Total Points Won</h4>
                <Progress
                    percent={testMatchData.percentPointsWon}
                    strokeColor={checkSuccess(testMatchData.percentPointsWon)}
                    strokeWidth={12}
                />
                <h4>Point Won By Winners</h4>
                <Progress
                    percent={testMatchData.percentWonByWinners}
                    strokeWidth={12}
                    strokeColor={"green"}
                />
                <h4>Points Lost by Unforced Errors</h4>
                <Progress
                    percent={testMatchData.percentLostByUnforced}
                    strokeColor={checkError(testMatchData.percentLostByUnforced)}
                    strokeWidth={12}
                />
                <h4>Points Won on Serve</h4>
                <Progress percent={testMatchData.percentWonServe}
                          strokeWidth={12} strokeColor={checkSuccess(testMatchData.percentWonServe)}/>
                <h4>First Serve Percentage</h4>
                <Progress percent={testMatchData.firstServePercent}
                          strokeColor={checkSuccess(testMatchData.firstServePercent)}
                          strokeWidth={12}/>
                <h4>Second Serve Percentage</h4>
                <Progress percent={testMatchData.secondServePercent} strokeWidth={12}
                          strokeColor={checkSecondServe(testMatchData.secondServePercent)}/>
                <h4>Points Lost on Return</h4>
                <Progress percent={testMatchData.pointsLostOnReturn} strokeWidth={12}
                          strokeColor={checkError(testMatchData.pointsLostOnReturn)}/>
                <h4>Percentage of Missed Returns</h4>
                <Progress percent={testMatchData.percentMissedReturns} strokeWidth={12}
                          strokeColor={checkError(testMatchData.percentMissedReturns)}/>
                <h4>Points Won at Baseline</h4>
                <Progress percent={testMatchData.pointsWonBaseline} strokeWidth={12}
                          strokeColor={checkSuccess(testMatchData.pointsWonBaseline)}/>
                <h4>Points Won with Forehand</h4>
                <Progress percent={testMatchData.pointsWonWithForehand} strokeWidth={12}
                          strokeColor={checkSuccess(testMatchData.pointsWonWithForehand)}/>
                <h4>Points Won with Backhand</h4>
                <Progress percent={testMatchData.pointsWonWithBackhand} strokeWidth={12}
                          strokeColor={checkSuccess(testMatchData.pointsWonWithBackhand)}/>
                <h4>Points Won at Net</h4>
                <Progress percent={testMatchData.pointsWonAtNet} strokeWidth={12}
                          strokeColor={checkSuccess(testMatchData.pointsWonAtNet)}/>
                <h4>Points Won with Forehand Volley</h4>
                <Progress percent={testMatchData.pointsWonForehandVolley} strokeWidth={12}
                          strokeColor={checkSuccess(testMatchData.pointsWonForehandVolley)}/>
                <h4>Points Won with Backhand Volley</h4>
                <Progress percent={testMatchData.pointsWonBackhandVolley} strokeWidth={12}
                          strokeColor={checkSuccess(testMatchData.pointsWonBackhandVolley)}/>
                <h4>Points Won with Overhead</h4>
                <Progress percent={testMatchData.pointsWonOverhead} strokeWidth={12}
                          strokeColor={checkSuccess(testMatchData.pointsWonOverhead)}/>
            </div>
        </>
    );
};

export default MatchOverviewData;
