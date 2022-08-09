import "antd/dist/antd.css";
import React, {useEffect, useState} from "react";
import styles from "../../../css/statistics/matchStatsDisplay.module.scss"
import ServingStats from "../servingStats";
import ReturnStats from "../returnStats";
import BaselineStats from "../baselineStats";
import NetStats from "../netStats";
import SaveMatchPanel from "./saveMatchPanel";
import BackToHomeHeading from "../backToHomeHeading";
import {MatchStats} from "../../../types/matchStats";

interface MatchStatsProps {
    setShowDashboard: (showDashboard: boolean) => void;
    state: any;
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
    const totalServePoints = state.context.pointsWonOnServe + state.context.pointsLostOnServe;

    const totalReturnPoints = state.context.pointsWonOnReturn + state.context.pointsLostOnReturn;

    const totalPoints = totalServePoints + totalReturnPoints;

    const percentOfReturnPointsWon = +((state.context.pointsWonOnReturn / totalReturnPoints) *
        100
    ).toPrecision(2);

    const percentOfTotalPointsWonOnReturn = +((state.context.pointsWonOnReturn / totalPoints) *
        100).toPrecision(2);

    const percentOfServingPointsWon = +(
       (state.context.pointsWonOnServe / totalServePoints) *
        100
    ).toPrecision(2);

    const percentOfTotalPointsWonOnServe = +(
        (state.context.pointsWonOnServe / totalPoints) *
        100).toPrecision(2);

    const firstServePercentage = +((state.context.madeFirstServes / totalServePoints) *
        100).toPrecision(2);

    const totalHitSecondServes = state.context.madeSecondServes + state.context.doubleFaults;

    const secondServePercentage = +((state.context.madeSecondServes / totalHitSecondServes) * 100).toPrecision(2);

    const totalNotReturnedServes = state.context.notReturnedFirstServes + state.context.notReturnedSecondServes + state.context.acesOnSecondServe + state.context.acesOnFirstServe;

    const totalAces = state.context.acesOnFirstServe + state.context.acesOnSecondServe;

    const totalNotReturnedFirstServes = state.context.acesOnFirstServe + state.context.notReturnedFirstServes;

    const totalNotReturnedSecondServes = state.context.acesOnSecondServe + state.context.notReturnedSecondServes;

    const totalBaselinePointsWon = state.context.pointsWonByForehand + state.context.pointsWonByBackhand + state.context.pointsWonByForehandWinner + state.context.pointsWonByBackhandWinner;

    const totalBaselinePointsLost = state.context.pointsLostByForehand + state.context.pointsLostByBackhand + state.context.pointsLostByForehandUnforcedError + state.context.pointsLostByBackhandUnforcedError;

    const percentPointsWonOnBaseline = +(totalBaselinePointsWon/totalPoints * 100).toPrecision(2);

    const percentBaselinePointsWon = +(totalBaselinePointsWon/(totalBaselinePointsWon + totalBaselinePointsLost) * 100).toPrecision(2);

    const percentPointsWonByWinnersOnBaseline = +((  state.context.pointsWonByForehandWinner +
       state.context.pointsWonByBackhandWinner)/(totalBaselinePointsWon) * 100).toPrecision(2);

    const percentPointsLostByUnforcedErrorOnBaseline = +((state.context.pointsLostByForehandUnforcedError +
       state.context.pointsLostByBackhandUnforcedError)/(totalBaselinePointsLost) * 100).toPrecision(2);

    const totalForehands = state.context.pointsWonByForehand + state.context.pointsLostByForehand + state.context.pointsWonByForehandWinner + state.context.pointsLostByForehandUnforcedError;

    const totalWinningForehands = state.context.pointsWonByForehand + state.context.pointsWonByForehandWinner;

    const forehandAccuracy = +((totalWinningForehands / totalForehands) * 100).toPrecision(2);

    const totalBackhands = state.context.pointsWonByBackhand + state.context.pointsLostByBackhand + state.context.pointsLostByBackhandUnforcedError + state.context.pointsWonByBackhandWinner;

    const totalWinningBackhands = state.context.pointsWonByBackhand + state.context.pointsWonByBackhandWinner;

    const backhandAccuracy = +((totalWinningBackhands / totalBackhands) * 100).toPrecision(2);

    const totalNetPointsWon =
       state.context.pointsWonByForehandVolley + state.context.pointsWonByBackhandVolley +
        state.context.pointsWonByForehandVolleyWinner + state.context.pointsWonByBackhandVolley +
        state.context.pointsWonByOverhead + state.context.pointsWonByOverheadWinner;

    const totalNetPointsLost =
       state.context.pointsLostByForehandVolley +
        state.context.pointsLostByBackhandVolley +
        state.context.pointsLostByForehandVolleyUnforcedError +
        state.context.pointsLostByBackhandVolleyUnforcedError +
        state.context.pointsLostByOverhead +
      state.context.pointsLostByOverheadUnforcedError;

    const percentPointsWonAtNet = +(totalNetPointsWon/totalPoints * 100).toPrecision(2);

    const percentNetPointsWon = +(totalNetPointsWon/(totalNetPointsWon + totalNetPointsLost) * 100).toPrecision(2);

    const percentPointsWonByWinnersAtNet = +((state.context.pointsWonByForehandVolleyWinner +
       state.context.pointsWonByBackhandVolleyWinner + state.context.pointsWonByOverheadWinner )/(totalNetPointsWon) * 100).toPrecision(2);

    const percentPointsLostByUnforcedErrorAtNet = +((state.context.pointsLostByForehandVolleyUnforcedError +
     state.context.pointsLostByBackhandVolleyUnforcedError + state.context.pointsLostByOverheadUnforcedError)/(totalNetPointsLost) * 100).toPrecision(2);

    const totalForehandVolleys =
        state.context.pointsWonByForehandVolley +
            state.context.pointsLostByForehandVolley +
           state.context.pointsWonByForehandVolleyWinner +
            state.context.pointsLostByForehandVolleyUnforcedError;

    const totalWinningForehandVolleys =
       state.context.pointsWonByForehandVolley +
       state.context.pointsWonByForehandVolleyWinner;

    const forehandVolleyAccuracy = +(
        (totalWinningForehandVolleys / totalForehandVolleys) *
        100
    ).toPrecision(2);

    const totalBackhandVolleys =
        state.context.pointsWonByBackhandVolley +
        state.context.pointsLostByBackhandVolley +
        state.context.pointsLostByBackhandVolleyUnforcedError +
       state.context.pointsWonByBackhandVolleyWinner;

    const totalWinningBackhandVolleys =
        state.context.pointsWonByBackhandVolley +
        state.context.pointsWonByBackhandVolleyWinner;

    const backhandVolleyAccuracy = +((
        totalWinningBackhandVolleys / totalBackhandVolleys *
        100
    ).toPrecision(2));

    const totalOverheads=
        state.context.pointsWonByOverhead +
        state.context.pointsLostByOverhead +
        state.context.pointsWonByOverheadWinner +
        state.context.pointsLostByOverheadUnforcedError;

    const totalWinningOverheads =
        state.context.pointsWonByOverhead +
        state.context.pointsWonByOverheadWinner;

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
    }, )

    const calculateStats = () =>{
        const stats = {
            percentOfTotalPointsWonOnServe: percentOfTotalPointsWonOnServe,
            percentOfServingPointsWon: percentOfServingPointsWon,
            firstServePercentage: firstServePercentage,
            secondServePercentage: secondServePercentage,
            totalAces: totalAces,
            notReturnedServesDeuceSide: state.context.notReturnedServesDeuceSide,
            notReturnedServesAdSide: state.context.notReturnedServesAdSide,
            totalNotReturnedFirstServes: totalNotReturnedFirstServes,
            totalNotReturnedSecondServes: totalNotReturnedSecondServes,
            totalNotReturnedServes: totalNotReturnedServes,
            notReturnedServesToAlley: state.context.notReturnedServesToAlley,
            notReturnedServesToBody: state.context.notReturnedServesToBody,
            notReturnedServesToCenter:state.context.notReturnedServesToCenter,
            percentOfTotalPointsWonOnReturn: percentOfTotalPointsWonOnReturn,
            percentOfReturnPointsWon: percentOfReturnPointsWon,
            missedSecondServeReturns: state.context.missedSecondServeReturns,
            missedFirstServeReturns: state.context.missedFirstServeReturns,
            percentPointsWonOnBaseline: percentPointsWonOnBaseline,
            percentBaselinePointsWon: percentBaselinePointsWon,
            percentPointsWonByWinnersOnBaseline: percentPointsWonByWinnersOnBaseline,
            percentPointsLostByUnforcedErrorOnBaseline: percentPointsLostByUnforcedErrorOnBaseline,
            pointsWonByForehandOnBaseline:state.context.pointsWonByForehand,
            pointsWonByForehandWinnerOnBaseline: state.context.pointsWonByForehandWinner,
            pointsWonByBackhandOnBaseline:state.context.pointsWonByBackhand,
            pointsWonByBackhandWinnerOnBaseline: state.context.pointsWonByBackhandWinner,
            pointsLostByForehandOnBaseline: state.context.pointsLostByForehand,
            pointsLostByForehandUnforcedErrorOnBaseline: state.context.pointsLostByForehandUnforcedError,
            pointsLostByBackhandOnBaseline: state.context.pointsLostByBackhand,
            pointsLostByBackhandUnforcedErrorOnBaseline: state.context.pointsLostByBackhandUnforcedError,
            forehandAccuracyOnBaseline: forehandAccuracy,
            backhandAccuracyOnBaseline: backhandAccuracy,
            percentPointsWonAtNet: percentPointsWonAtNet,
            percentNetPointsWon: percentNetPointsWon,
            percentPointsWonByWinnersAtNet: percentPointsWonByWinnersAtNet,
            percentPointsLostByUnforcedErrorAtNet: percentPointsLostByUnforcedErrorAtNet,
            forehandVolleyAccuracy: forehandVolleyAccuracy,
            backhandVolleyAccuracy: backhandVolleyAccuracy,
            overheadAccuracy: overheadAccuracy,
            pointsWonByForehandVolley: state.context.pointsWonByForehandVolley,
            pointsWonByForehandVolleyWinner: state.context.pointsWonByForehandVolleyWinner,
            pointsWonByBackhandVolley: state.context.pointsWonByBackhandVolley,
            pointsWonByBackhandVolleyWinner: state.context.pointsWonByBackhandVolleyWinner,
            pointsWonByOverhead: state.context.pointsWonByOverhead,
            pointsWonByOverheadWinner: state.context.pointsWonByOverheadWinner,
            pointsLostByForehandVolley: state.context.pointsLostByForehandVolley,
            pointsLostByForehandVolleyUnforcedError: state.context.pointsLostByForehandVolleyUnforcedError,
            pointsLostByBackhandVolley: state.context.pointsLostByBackhandVolley,
            pointsLostByBackhandVolleyUnforcedError: state.context.pointsLostByBackhandVolleyUnforcedError,
            pointsLostByOverhead: state.context.pointsLostByOverhead,
            pointsLostByOverheadUnforcedError: state.context.pointsLostByOverheadUnforcedError,
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
