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