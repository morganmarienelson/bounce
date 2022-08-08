import "antd/dist/antd.css";
import React, {useEffect, useState} from "react";
import styles from "../css/matchStatsDisplay.module.css";
import ServingStats from "../servingStats";
import ReturnStats from "../returnStats";
import BaselineStats from "../baselineStats";
import NetStats from "../netStats";
import SaveMatchPanel from "./saveMatchPanel";
import BackToHomeHeading from "../backToHomeHeading";

interface MatchStatsProps {
    setShowDashboard: (showDashboard: boolean) => void;
    state: any;
}

export interface MatchStats{
    percentPointsWonOnBaseline: number,
    percentBaselinePointsWon: number,
    percentPointsWonByWinnersOnBaseline: number,
    percentPointsLostByUnforcedErrorOnBaseline: number,
    pointsWonByForehandOnBaseline:number,
    pointsWonByForehandWinnerOnBaseline: number,
    pointsWonByBackhandOnBaseline: number,
    pointsWonByBackhandWinnerOnBaseline: number,
    pointsLostByForehandOnBaseline: number,
    pointsLostByForehandUnforcedErrorOnBaseline: number,
    pointsLostByBackhandOnBaseline: number,
    pointsLostByBackhandUnforcedErrorOnBaseline: number,
    forehandAccuracyOnBaseline: number,
    backhandAccuracyOnBaseline: number,
    percentPointsWonAtNet: number,
    percentNetPointsWon: number,
    percentPointsWonByWinnersAtNet: number,
    percentPointsLostByUnforcedErrorAtNet: number,
    forehandVolleyAccuracy: number,
    backhandVolleyAccuracy: number,
    overheadAccuracy: number,
    pointsWonByForehandVolley: number,
    pointsWonByForehandVolleyWinner: number,
    pointsWonByBackhandVolley: number,
    pointsWonByBackhandVolleyWinner: number,
    pointsWonByOverhead: number,
    pointsWonByOverheadWinner: number,
    pointsLostByForehandVolley: number,
    pointsLostByForehandVolleyUnforcedError: number,
    pointsLostByBackhandVolley: number,
    pointsLostByBackhandVolleyUnforcedError: number,
    pointsLostByOverhead:number,
    pointsLostByOverheadUnforcedError: number,
    percentOfTotalPointsWonOnServe: number,
    percentOfServingPointsWon: number,
    firstServePercentage: number,
    secondServePercentage: number,
    totalAces: number,
    notReturnedServesDeuceSide: number,
    notReturnedServesAdSide: number,
    totalNotReturnedFirstServes: number,
    totalNotReturnedSecondServes: number,
    totalNotReturnedServes: number,
    notReturnedServesToAlley: number,
    notReturnedServesToBody: number,
    notReturnedServesToCenter: number,
    percentOfTotalPointsWonOnReturn: number,
    percentOfReturnPointsWon: number
    missedSecondServeReturns: number,
    missedFirstServeReturns: number,
}

const NewMatchStatsDisplay: React.FC<MatchStatsProps> = ({setShowDashboard, state}) => {
    const [matchStats, setMatchStats] = useState(
        {
            percentPointsWonOnBaseline: 0,
            percentBaselinePointsWon: 0,
            percentPointsWonByWinnersOnBaseline: 0,
            percentPointsLostByUnforcedErrorOnBaseline: 0,
            pointsWonByForehandOnBaseline:0,
            pointsWonByForehandWinnerOnBaseline: 0,
            pointsWonByBackhandOnBaseline: 0,
            pointsWonByBackhandWinnerOnBaseline: 0,
            pointsLostByForehandOnBaseline: 0,
            pointsLostByForehandUnforcedErrorOnBaseline: 0,
            pointsLostByBackhandOnBaseline: 0,
            pointsLostByBackhandUnforcedErrorOnBaseline: 0,
            forehandAccuracyOnBaseline: 0,
            backhandAccuracyOnBaseline: 0,
            percentPointsWonAtNet: 0,
            percentNetPointsWon: 0,
            percentPointsWonByWinnersAtNet: 0,
            percentPointsLostByUnforcedErrorAtNet: 0,
            forehandVolleyAccuracy: 0,
            backhandVolleyAccuracy: 0,
            overheadAccuracy: 0,
            pointsWonByForehandVolley: 0,
            pointsWonByForehandVolleyWinner: 0,
            pointsWonByBackhandVolley: 0,
            pointsWonByBackhandVolleyWinner: 0,
            pointsWonByOverhead: 0,
            pointsWonByOverheadWinner: 0,
            pointsLostByForehandVolley: 0,
            pointsLostByForehandVolleyUnforcedError: 0,
            pointsLostByBackhandVolley: 0,
            pointsLostByBackhandVolleyUnforcedError: 0,
            pointsLostByOverhead:0,
            pointsLostByOverheadUnforcedError: 0,
            percentOfTotalPointsWonOnServe: 0,
            percentOfServingPointsWon: 0,
            firstServePercentage: 0,
            secondServePercentage: 0,
            totalAces: 0,
            notReturnedServesDeuceSide: 0,
            notReturnedServesAdSide: 0,
            totalNotReturnedFirstServes: 0,
            totalNotReturnedSecondServes: 0,
            totalNotReturnedServes: 0,
            notReturnedServesToAlley: 0,
            notReturnedServesToBody: 0,
            notReturnedServesToCenter: 0,
            percentOfTotalPointsWonOnReturn: 0,
            percentOfReturnPointsWon: 0,
            missedSecondServeReturns: 0,
            missedFirstServeReturns: 0,
        }
    );
    const totalServePoints =
        +JSON.stringify(state.context.pointsWonOnServe) +
        +JSON.stringify(state.context.pointsLostOnServe);

    const totalReturnPoints =
        +JSON.stringify(state.context.pointsWonOnReturn) +
        +JSON.stringify(state.context.pointsLostOnReturn);

    const totalPoints =
        totalServePoints +
        totalReturnPoints;

    const percentOfReturnPointsWon = +(
        (+JSON.stringify(state.context.pointsWonOnReturn) / totalReturnPoints) *
        100
    ).toPrecision(2);

    const percentOfTotalPointsWonOnReturn = +(
        (+JSON.stringify(state.context.pointsWonOnReturn) / totalPoints) *
        100
    ).toPrecision(2);

    const percentOfServingPointsWon = +(
        (+JSON.stringify(state.context.pointsWonOnServe) / totalServePoints) *
        100
    ).toPrecision(2);

    const percentOfTotalPointsWonOnServe = +(
        (+JSON.stringify(state.context.pointsWonOnServe) / totalPoints) *
        100
    ).toPrecision(2);

    const firstServePercentage = +(
        (+JSON.stringify(state.context.madeFirstServes) / totalServePoints) *
        100
    ).toPrecision(2);

    const totalHitSecondServes =
        +JSON.stringify(state.context.madeSecondServes) +
        +JSON.stringify(state.context.doubleFaults);

    const secondServePercentage = +(
        (+JSON.stringify(state.context.madeSecondServes) / totalHitSecondServes) *
        100
    ).toPrecision(2);

    const totalNotReturnedServes =
        +JSON.stringify(state.context.notReturnedFirstServes) +
        +JSON.stringify(state.context.notReturnedSecondServes) +
        +JSON.stringify(state.context.acesOnSecondServe) +
        +JSON.stringify(state.context.acesOnFirstServe);

    const totalAces = +JSON.stringify(state.context.acesOnFirstServe) + +JSON.stringify(state.context.acesOnSecondServe);

    const totalNotReturnedFirstServes = +JSON.stringify(state.context.acesOnFirstServe) + +JSON.stringify(state.context.notReturnedFirstServes);

    const totalNotReturnedSecondServes = +JSON.stringify(state.context.acesOnSecondServe) + +JSON.stringify(state.context.notReturnedSecondServes);

    const totalBaselinePointsWon = +(
        +JSON.stringify(state.context.pointsWonByForehand) +
        +JSON.stringify(state.context.pointsWonByBackhand) +
        +JSON.stringify(state.context.pointsWonByForehandWinner) +
        +JSON.stringify(state.context.pointsWonByBackhandWinner)
    );

    const totalBaselinePointsLost = +(
        +JSON.stringify(state.context.pointsLostByForehand) +
        +JSON.stringify(state.context.pointsLostByBackhand) +
        +JSON.stringify(state.context.pointsLostByForehandUnforcedError) +
        +JSON.stringify(state.context.pointsLostByBackhandUnforcedError)
    );

    const percentPointsWonOnBaseline = +(totalBaselinePointsWon/totalPoints * 100).toPrecision(2);

    const percentBaselinePointsWon = +(totalBaselinePointsWon/(totalBaselinePointsWon + totalBaselinePointsLost) * 100).toPrecision(2);

    const percentPointsWonByWinnersOnBaseline = +(  (  +JSON.stringify(state.context.pointsWonByForehandWinner) +
        +JSON.stringify(state.context.pointsWonByBackhandWinner))/(totalBaselinePointsWon) * 100).toPrecision(2);

    const percentPointsLostByUnforcedErrorOnBaseline = +(  (  +JSON.stringify(state.context.pointsLostByForehandUnforcedError) +
        +JSON.stringify(state.context.pointsLostByBackhandUnforcedError))/(totalBaselinePointsLost) * 100).toPrecision(2);

    const totalForehands =
        +JSON.stringify(state.context.pointsWonByForehand) +
        +JSON.stringify(
            state.context.pointsLostByForehand +
            +JSON.stringify(state.context.pointsWonByForehandWinner) +
            +JSON.stringify(state.context.pointsLostByForehandUnforcedError)
        );

    const totalWinningForehands =
        +JSON.stringify(state.context.pointsWonByForehand) +
        +JSON.stringify(state.context.pointsWonByForehandWinner);

    const forehandAccuracy = +(
        (totalWinningForehands / totalForehands) *
        100
    ).toPrecision(2);

    const totalBackhands =
        +JSON.stringify(state.context.pointsWonByBackhand) +
        +JSON.stringify(state.context.pointsLostByBackhand) +
        +JSON.stringify(state.context.pointsLostByBackhandUnforcedError) +
        +JSON.stringify(state.context.pointsWonByBackhandWinner);

    const totalWinningBackhands =
        +JSON.stringify(state.context.pointsWonByBackhand) +
        +JSON.stringify(state.context.pointsWonByBackhandWinner);

    const backhandAccuracy = +(
        (totalWinningBackhands / totalBackhands) *
        100
    ).toPrecision(2);

    const totalNetPointsWon = +(
        +JSON.stringify(state.context.pointsWonByForehandVolley) +
        +JSON.stringify(state.context.pointsWonByBackhandVolley) +
        +JSON.stringify(state.context.pointsWonByForehandVolleyWinner) +
        +JSON.stringify(state.context.pointsWonByBackhandVolley) +
        +JSON.stringify(state.context.pointsWonByOverhead) +
        +JSON.stringify(state.context.pointsWonByOverheadWinner)
    );

    const totalNetPointsLost = +(
        +JSON.stringify(state.context.pointsLostByForehandVolley) +
        +JSON.stringify(state.context.pointsLostByBackhandVolley) +
        +JSON.stringify(state.context.pointsLostByForehandVolleyUnforcedError) +
        +JSON.stringify(state.context.pointsLostByBackhandVolleyUnforcedError) +
        +JSON.stringify(state.context.pointsLostByOverhead) +
        +JSON.stringify(state.context.pointsLostByOverheadUnforcedError)
    );

    const percentPointsWonAtNet = +(totalNetPointsWon/totalPoints * 100).toPrecision(2);

    const percentNetPointsWon = +(totalNetPointsWon/(totalNetPointsWon + totalNetPointsLost) * 100).toPrecision(2);

    const percentPointsWonByWinnersAtNet = +(  (  +JSON.stringify(state.context.pointsWonByForehandVolleyWinner) +
        +JSON.stringify(state.context.pointsWonByBackhandVolleyWinner) +         +JSON.stringify(state.context.pointsWonByOverheadWinner) )/(totalNetPointsWon) * 100).toPrecision(2);

    const percentPointsLostByUnforcedErrorAtNet = +(  (  +JSON.stringify(state.context.pointsLostByForehandVolleyUnforcedError) +
        +JSON.stringify(state.context.pointsLostByBackhandVolleyUnforcedError) + +JSON.stringify(state.context.pointsLostByOverheadUnforcedError))/(totalNetPointsLost) * 100).toPrecision(2);

    const totalForehandVolleys =
        +JSON.stringify(state.context.pointsWonByForehandVolley) +
        +JSON.stringify(
            state.context.pointsLostByForehandVolley +
            +JSON.stringify(state.context.pointsWonByForehandVolleyWinner) +
            +JSON.stringify(state.context.pointsLostByForehandVolleyUnforcedError)
        );

    const totalWinningForehandVolleys =
        +JSON.stringify(state.context.pointsWonByForehandVolley) +
        +JSON.stringify(state.context.pointsWonByForehandVolleyWinner);

    const forehandVolleyAccuracy = +(
        (totalWinningForehandVolleys / totalForehandVolleys) *
        100
    ).toPrecision(2);

    const totalBackhandVolleys =
        +JSON.stringify(state.context.pointsWonByBackhandVolley) +
        +JSON.stringify(state.context.pointsLostByBackhandVolley) +
        +JSON.stringify(state.context.pointsLostByBackhandVolleyUnforcedError) +
        +JSON.stringify(state.context.pointsWonByBackhandVolleyWinner);

    const totalWinningBackhandVolleys =
        +JSON.stringify(state.context.pointsWonByBackhandVolley) +
        +JSON.stringify(state.context.pointsWonByBackhandVolleyWinner);

    const backhandVolleyAccuracy = +(
        (totalWinningBackhandVolleys / totalBackhandVolleys) *
        100
    ).toPrecision(2);

    const totalOverheads=
        +JSON.stringify(state.context.pointsWonByOverhead) +
        +JSON.stringify(state.context.pointsLostByOverhead) +
        +JSON.stringify(state.context.pointsWonByOverheadWinner) +
        +JSON.stringify(state.context.pointsLostByOverheadUnforcedError);

    const totalWinningOverheads =
        +JSON.stringify(state.context.pointsWonByOverhead) +
        +JSON.stringify(state.context.pointsWonByOverheadWinner);

    const overheadAccuracy = +(
        (totalWinningOverheads / totalOverheads) *
        100
    ).toPrecision(2);

    const checkSuccess = (value: number) => {
        if (value >= 85) {
            return "#129729";
        } else if (value > 70) {
            return "#7ae200";
        } else if (value > 60) {
        return "#ffe91a";
        }
        else if (value > 50) {
            return "#ff6600";
        }
    else {
            return "#de0000";
        }
    };

    useEffect(() => {
        calculateStats();
    }, [])

    const calculateStats = () =>{
        const stats = {
            percentOfTotalPointsWonOnServe: percentOfTotalPointsWonOnServe,
            percentOfServingPointsWon: percentOfServingPointsWon,
            firstServePercentage: firstServePercentage,
            secondServePercentage: secondServePercentage,
            totalAces: totalAces,
            notReturnedServesDeuceSide: +JSON.stringify(state.context.notReturnedServesDeuceSide),
            notReturnedServesAdSide: +JSON.stringify(state.context.notReturnedServesAdSide),
            totalNotReturnedFirstServes: totalNotReturnedFirstServes,
            totalNotReturnedSecondServes: totalNotReturnedSecondServes,
            totalNotReturnedServes: totalNotReturnedServes,
            notReturnedServesToAlley: +JSON.stringify(state.context.notReturnedServesToAlley),
            notReturnedServesToBody:  +JSON.stringify(state.context.notReturnedServesToBody),
            notReturnedServesToCenter: +JSON.stringify(state.context.notReturnedServesToCenter),
            percentOfTotalPointsWonOnReturn: percentOfTotalPointsWonOnReturn,
            percentOfReturnPointsWon: percentOfReturnPointsWon,
            missedSecondServeReturns: +JSON.stringify(state.context.missedSecondServeReturns),
            missedFirstServeReturns: +JSON.stringify(state.context.missedFirstServeReturns),
            percentPointsWonOnBaseline: percentPointsWonOnBaseline,
            percentBaselinePointsWon: percentBaselinePointsWon,
            percentPointsWonByWinnersOnBaseline: percentPointsWonByWinnersOnBaseline,
            percentPointsLostByUnforcedErrorOnBaseline: percentPointsLostByUnforcedErrorOnBaseline,
            pointsWonByForehandOnBaseline:+JSON.stringify(state.context.pointsWonByForehand),
            pointsWonByForehandWinnerOnBaseline: +JSON.stringify(state.context.pointsWonByForehandWinner),
            pointsWonByBackhandOnBaseline: +JSON.stringify(state.context.pointsWonByBackhand),
            pointsWonByBackhandWinnerOnBaseline: +JSON.stringify(state.context.pointsWonByBackhandWinner),
            pointsLostByForehandOnBaseline: +JSON.stringify(state.context.pointsLostByForehand),
            pointsLostByForehandUnforcedErrorOnBaseline: +JSON.stringify(state.context.pointsLostByForehandUnforcedError),
            pointsLostByBackhandOnBaseline: +JSON.stringify(state.context.pointsLostByBackhand),
            pointsLostByBackhandUnforcedErrorOnBaseline:  +JSON.stringify(state.context.pointsLostByBackhandUnforcedError),
            forehandAccuracyOnBaseline: forehandAccuracy,
            backhandAccuracyOnBaseline: backhandAccuracy,
            percentPointsWonAtNet: percentPointsWonAtNet,
            percentNetPointsWon: percentNetPointsWon,
            percentPointsWonByWinnersAtNet: percentPointsWonByWinnersAtNet,
            percentPointsLostByUnforcedErrorAtNet: percentPointsLostByUnforcedErrorAtNet,
            forehandVolleyAccuracy: forehandVolleyAccuracy,
            backhandVolleyAccuracy: backhandVolleyAccuracy,
            overheadAccuracy: overheadAccuracy,
            pointsWonByForehandVolley: +JSON.stringify(state.context.pointsWonByForehandVolley),
            pointsWonByForehandVolleyWinner: +JSON.stringify(state.context.pointsWonByForehandVolleyWinner),
            pointsWonByBackhandVolley: +JSON.stringify(state.context.pointsWonByBackhandVolley),
            pointsWonByBackhandVolleyWinner: +JSON.stringify(state.context.pointsWonByBackhandVolleyWinner),
            pointsWonByOverhead: +JSON.stringify(state.context.pointsWonByOverhead),
            pointsWonByOverheadWinner: +JSON.stringify(state.context.pointsWonByOverheadWinner),
            pointsLostByForehandVolley: +JSON.stringify(state.context.pointsLostByForehandVolley),
            pointsLostByForehandVolleyUnforcedError: +JSON.stringify(state.context.pointsLostByForehandVolleyUnforcedError),
            pointsLostByBackhandVolley: +JSON.stringify(state.context.pointsLostByBackhandVolley),
            pointsLostByBackhandVolleyUnforcedError: +JSON.stringify(state.context.pointsLostByBackhandVolleyUnforcedError),
            pointsLostByOverhead: +JSON.stringify(state.context.pointsLostByOverhead),
            pointsLostByOverheadUnforcedError: +JSON.stringify(state.context.pointsLostByOverheadUnforcedError),
        } as MatchStats;
        setMatchStats(stats);
    }

    return (
        <div>
            <BackToHomeHeading/>
            <div>
                <ServingStats matchStats={matchStats} checkSuccess={checkSuccess}/>
                <ReturnStats matchStats={matchStats} checkSuccess={checkSuccess}/>
                <BaselineStats matchStats={matchStats} checkSuccess={checkSuccess}/>
                <NetStats matchStats={matchStats} checkSuccess={checkSuccess}/>
                <SaveMatchPanel  state={state}/>
            </div>
        </div>
    );
};

export default NewMatchStatsDisplay;
