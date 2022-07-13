import {assign, createMachine} from "xstate";

interface PointOutcomes {
    pointsWonByForehand: number;
    pointsWonByBackhand: number;
    pointsWonByForehandVolley: number;
    pointsWonByBackhandVolley: number;
    pointsWonByOverhead: number;
    pointsWonByForehandWinner: number;
    pointsWonByBackhandWinner: number;
    pointsWonByForehandVolleyWinner: number;
    pointsWonByBackhandVolleyWinner: number;
    pointsWonByOverheadWinner: number;
    pointsWonOnServe: number;
    pointsWonOnReturn: number;
    pointsLostByForehand: number;
    pointsLostByBackhand: number;
    pointsLostByForehandVolley: number;
    pointsLostByBackhandVolley: number;
    pointsLostByOverhead: number;
    pointsLostByForehandUnforcedError: number;
    pointsLostByBackhandUnforcedError: number;
    pointsLostByForehandVolleyUnforcedError: number;
    pointsLostByBackhandVolleyUnforcedError: number;
    pointsLostByOverheadUnforcedError: number;
    pointsLostOnServe: number;
    pointsLostOnReturn: number;
    missedReturns: number;
    missedFirstServes: number;
    doubleFaults: number;
    acesOnFirstServe: number;
    acesOnSecondServe: number;
    madeFirstServes: number;
    madeSecondServes: number;
    notReturnedFirstServes: number;
    notReturnedSecondServes: number;

}

export enum MatchDataEvents {
    IncrementForehandWin = "incrementForehandWin",
    DecrementForehandWin = "decrementForehandWin",
    IncrementBackhandWin = "incrementBackhandWin",
    DecrementBackhandWin = "decrementBackhandWin",
    IncrementForehandVolleyWin = "incrementForehandVolleyWin",
    DecrementForehandVolleyWin = "decrementForehandVolleyWin",
    IncrementBackhandVolleyWin = "incrementBackhandVolleyWin",
    DecrementBackhandVolleyWin = "decrementBackhandVolleyWin",
    IncrementOverheadWin = "incrementOverheadWin",
    DecrementOverheadWin = "decrementOverheadWin",
    IncrementBackhandWinner = "incrementBackhandWinner",
    DecrementBackhandWinner = "decrementBackhandWinner",
    IncrementForehandWinner = "incrementForehandWinner",
    DecrementForehandWinner = "decrementForehandWinner",
    IncrementBackhandVolleyWinner = "incrementBackhandVolleyWinner",
    DecrementBackhandVolleyWinner = "decrementBackhandVolleyWinner",
    IncrementForehandVolleyWinner = "incrementForehandVolleyWinner",
    DecrementForehandVolleyWinner = "decrementForehandVolleyWinner",
    IncrementOverheadWinner = "incrementOverheadWinner",
    DecrementOverheadWinner = "decrementOverheadWinner",
    IncrementPointsWonOnServe = "incrementPointsWonOnServe",
    DecrementPointsWonOnServe = "decrementPointsWonOnServe",
    IncrementPointsWonOnReturn = "incrementPointsWonOnReturn",
    DecrementPointsWonOnReturn = "decrementPointsWonOnReturn",
    IncrementBackhandLoss = "incrementBackhandLoss",
    DecrementBackhandLoss = "decrementBackhandLoss",
    IncrementForehandLoss = "incrementForehandLoss",
    DecrementForehandLoss = "decrementForehandLoss",
    IncrementBackhandVolleyLoss = "incrementBackhandVolleyLoss",
    DecrementBackhandVolleyLoss = "decrementBackhandVolleyLoss",
    IncrementForehandVolleyLoss = "incrementForehandVolleyLoss",
    DecrementForehandVolleyLoss = "decrementForehandVolleyLoss",
    IncrementOverheadLoss = "incrementOverheadLoss",
    DecrementOverheadLoss = "decrementOverheadLoss",
    IncrementBackhandUnforcedError = "incrementBackhandUnforcedError",
    DecrementBackhandUnforcedError = "decrementBackhandUnforcedError",
    IncrementForehandUnforcedError = "incrementForehandUnforcedError",
    DecrementForehandUnforcedError = "decrementForehandUnforcedError",
    IncrementBackhandVolleyUnforcedError = "incrementBackhandVolleyUnforcedError",
    DecrementBackhandVolleyUnforcedError = "decrementBackhandVolleyUnforcedError",
    IncrementForehandVolleyUnforcedError = "incrementForehandVolleyUnforcedError",
    DecrementForehandVolleyUnforcedError = "decrementForehandVolleyUnforcedError",
    IncrementOverheadUnforcedError = "incrementOverheadUnforcedError",
    DecrementOverheadUnforcedError = "decrementOverheadUnforcedError",
    IncrementPointsLostOnServe = "incrementPointsLostOnServe",
    DecrementPointsLostOnServe = "decrementPointsLostOnServe",
    IncrementPointsLostOnReturn = "incrementPointsLostOnReturn",
    DecrementPointsLostOnReturn = "decrementPointsLostOnReturn",
    IncrementMissedReturns = "incrementMissedReturns",
    DecrementMissedReturns = "decrementMissedReturns",
    IncrementMissedFirstServes = "incrementMissedFirstServes",
    DecrementMissedFirstServes = "decrementMissedFirstServes",
    IncrementDoubleFaults = "incrementDoubleFaults",
    DecrementDoubleFaults = "decrementDoubleFaults",
    IncrementAcesOnFirstServe = "incrementAcesOnFirstServe",
    DecrementAcesOnFirstServe = "decrementAcesOnFirstServe",
    IncrementAcesOnSecondServe = "incrementAcesOnSecondServe",
    DecrementAcesOnSecondServe = "decrementAcesOnSecondServe",
    IncrementMadeFirstServes = "incrementMadeFirstServes",
    DecrementMadeFirstServes = "decrementMadeFirstServes",
    IncrementMadeSecondServes = "incrementMadeSecondServes",
    DecrementMadeSecondServes = "decrementMadeSecondServes",
    IncrementNotReturnedFirstServes = "incrementNotReturnedFirstServes",
    DecrementNotReturnedFirstServes = "decrementNotReturnedFirstServes",
    IncrementNotReturnedSecondServes = "incrementNotReturnedSecondServes",
    DecrementNotReturnedSecondServes = "decrementNotReturnedSecondServes",
}

export const matchData = createMachine({
    schema: {
        context: {} as PointOutcomes,
        events: {} as
            | { type: MatchDataEvents.IncrementForehandWin }
            | { type: MatchDataEvents.DecrementForehandWin }
            | { type: MatchDataEvents.IncrementBackhandWin }
            | { type: MatchDataEvents.DecrementBackhandWin }
            | { type: MatchDataEvents.IncrementForehandVolleyWin }
            | { type: MatchDataEvents.DecrementForehandVolleyWin }
            | { type: MatchDataEvents.IncrementBackhandVolleyWin }
            | { type: MatchDataEvents.DecrementBackhandVolleyWin }
            | { type: MatchDataEvents.IncrementOverheadWin }
            | { type: MatchDataEvents.DecrementOverheadWin }
            | { type: MatchDataEvents.IncrementForehandWinner }
            | { type: MatchDataEvents.DecrementForehandWinner }
            | { type: MatchDataEvents.IncrementBackhandWinner }
            | { type: MatchDataEvents.DecrementBackhandWinner }
            | { type: MatchDataEvents.IncrementForehandVolleyWinner }
            | { type: MatchDataEvents.DecrementForehandVolleyWinner }
            | { type: MatchDataEvents.IncrementBackhandVolleyWinner }
            | { type: MatchDataEvents.DecrementBackhandVolleyWinner }
            | { type: MatchDataEvents.IncrementOverheadWinner }
            | { type: MatchDataEvents.DecrementOverheadWinner }
            | { type: MatchDataEvents.IncrementPointsWonOnReturn }
            | { type: MatchDataEvents.DecrementPointsWonOnReturn }
            | { type: MatchDataEvents.IncrementPointsWonOnServe }
            | { type: MatchDataEvents.DecrementPointsWonOnServe }
            | { type: MatchDataEvents.IncrementForehandLoss }
            | { type: MatchDataEvents.DecrementForehandLoss }
            | { type: MatchDataEvents.IncrementBackhandLoss }
            | { type: MatchDataEvents.DecrementBackhandLoss }
            | { type: MatchDataEvents.IncrementForehandVolleyLoss }
            | { type: MatchDataEvents.DecrementForehandVolleyLoss }
            | { type: MatchDataEvents.IncrementBackhandVolleyLoss }
            | { type: MatchDataEvents.DecrementBackhandVolleyLoss }
            | { type: MatchDataEvents.IncrementOverheadLoss }
            | { type: MatchDataEvents.DecrementOverheadLoss }
            | { type: MatchDataEvents.IncrementForehandUnforcedError }
            | { type: MatchDataEvents.DecrementForehandUnforcedError }
            | { type: MatchDataEvents.IncrementBackhandUnforcedError }
            | { type: MatchDataEvents.DecrementBackhandUnforcedError }
            | { type: MatchDataEvents.IncrementForehandVolleyUnforcedError }
            | { type: MatchDataEvents.DecrementForehandVolleyUnforcedError }
            | { type: MatchDataEvents.IncrementBackhandVolleyUnforcedError }
            | { type: MatchDataEvents.DecrementBackhandVolleyUnforcedError }
            | { type: MatchDataEvents.IncrementOverheadUnforcedError }
            | { type: MatchDataEvents.DecrementOverheadUnforcedError }
            | { type: MatchDataEvents.IncrementPointsLostOnReturn }
            | { type: MatchDataEvents.DecrementPointsLostOnReturn }
            | { type: MatchDataEvents.IncrementPointsLostOnServe }
            | { type: MatchDataEvents.DecrementPointsLostOnServe }
            | { type: MatchDataEvents.IncrementMissedReturns }
            | { type: MatchDataEvents.DecrementMissedReturns }
            | { type: MatchDataEvents.IncrementMissedFirstServes }
            | { type: MatchDataEvents.DecrementMissedFirstServes }
            | { type: MatchDataEvents.IncrementDoubleFaults }
            | { type: MatchDataEvents.DecrementDoubleFaults }
            | { type: MatchDataEvents.IncrementAcesOnFirstServe }
            | { type: MatchDataEvents.DecrementAcesOnFirstServe }
            | { type: MatchDataEvents.IncrementAcesOnSecondServe }
            | { type: MatchDataEvents.DecrementAcesOnSecondServe }
            | { type: MatchDataEvents.IncrementMadeFirstServes }
            | { type: MatchDataEvents.DecrementMadeFirstServes }
            | { type: MatchDataEvents.IncrementMadeSecondServes }
            | { type: MatchDataEvents.DecrementMadeSecondServes }
            | { type: MatchDataEvents.IncrementNotReturnedFirstServes }
            | { type: MatchDataEvents.DecrementNotReturnedFirstServes }
            | { type: MatchDataEvents.IncrementNotReturnedSecondServes }
            | { type: MatchDataEvents.DecrementNotReturnedSecondServes },
    },
    context: {
        pointsWonByForehand: 0,
        pointsWonByBackhand: 0,
        pointsWonByForehandVolley: 0,
        pointsWonByBackhandVolley: 0,
        pointsWonByOverhead: 0,
        pointsWonByForehandWinner: 0,
        pointsWonByBackhandWinner: 0,
        pointsWonByForehandVolleyWinner: 0,
        pointsWonByBackhandVolleyWinner: 0,
        pointsWonByOverheadWinner: 0,
        pointsWonOnReturn: 0,
        pointsWonOnServe: 0,
        pointsLostByForehand: 0,
        pointsLostByBackhand: 0,
        pointsLostByForehandVolley: 0,
        pointsLostByBackhandVolley: 0,
        pointsLostByOverhead: 0,
        pointsLostByForehandUnforcedError: 0,
        pointsLostByBackhandUnforcedError: 0,
        pointsLostByForehandVolleyUnforcedError: 0,
        pointsLostByBackhandVolleyUnforcedError: 0,
        pointsLostByOverheadUnforcedError: 0,
        pointsLostOnServe: 0,
        pointsLostOnReturn: 0,
        missedReturns: 0,
        missedFirstServes: 0,
        doubleFaults: 0,
        acesOnFirstServe: 0,
        acesOnSecondServe: 0,
        madeFirstServes: 0,
        madeSecondServes: 0,
        notReturnedFirstServes: 0,
        notReturnedSecondServes: 0,
    },
    on: {
        incrementForehandWin: {
            actions: assign({
                pointsWonByForehand: (context: PointOutcomes, event) =>
                    context.pointsWonByForehand + 1,
            }),
        },
        decrementForehandWin: {
            actions: assign({
                pointsWonByForehand: (context: PointOutcomes, event) =>
                    context.pointsWonByForehand - 1,
            }),
        },
        incrementBackhandWin: {
            actions: assign({
                pointsWonByBackhand: (context: PointOutcomes, event) =>
                    context.pointsWonByBackhand + 1,
            }),
        },
        decrementBackhandWin: {
            actions: assign({
                pointsWonByBackhand: (context: PointOutcomes, event) =>
                    context.pointsWonByBackhand - 1,
            }),
        },
        incrementForehandVolleyWin: {
            actions: assign({
                pointsWonByForehandVolley: (context: PointOutcomes, event) =>
                    context.pointsWonByForehandVolley + 1,
            }),
        },
        decrementForehandVolleyWin: {
            actions: assign({
                pointsWonByForehandVolley: (context: PointOutcomes, event) =>
                    context.pointsWonByForehandVolley - 1,
            }),
        },
        incrementBackhandVolleyWin: {
            actions: assign({
                pointsWonByBackhandVolley: (context: PointOutcomes, event) =>
                    context.pointsWonByBackhandVolley + 1,
            }),
        },
        decrementBackhandVolleyWin: {
            actions: assign({
                pointsWonByBackhandVolley: (context: PointOutcomes, event) =>
                    context.pointsWonByBackhandVolley - 1,
            }),
        },
        incrementOverheadWin: {
            actions: assign({
                pointsWonByOverhead: (context: PointOutcomes, event) =>
                    context.pointsWonByOverhead + 1,
            }),
        },
        decrementOverheadWin: {
            actions: assign({
                pointsWonByOverhead: (context: PointOutcomes, event) =>
                    context.pointsWonByOverhead - 1,
            }),
        },
        incrementForehandWinner: {
            actions: assign({
                pointsWonByForehandWinner: (context: PointOutcomes, event) =>
                    context.pointsWonByForehandWinner + 1,
            }),
        },
        decrementForehandWinner: {
            actions: assign({
                pointsWonByForehandWinner: (context: PointOutcomes, event) =>
                    context.pointsWonByForehandWinner - 1,
            }),
        },
        incrementBackhandWinner: {
            actions: assign({
                pointsWonByBackhandWinner: (context: PointOutcomes, event) =>
                    context.pointsWonByBackhandWinner + 1,
            }),
        },
        decrementBackhandWinner: {
            actions: assign({
                pointsWonByBackhandWinner: (context: PointOutcomes, event) =>
                    context.pointsWonByBackhandWinner - 1,
            }),
        },
        incrementForehandVolleyWinner: {
            actions: assign({
                pointsWonByForehandVolleyWinner: (context: PointOutcomes, event) =>
                    context.pointsWonByForehandVolleyWinner + 1,
            }),
        },
        decrementForehandVolleyWinner: {
            actions: assign({
                pointsWonByForehandVolleyWinner: (context: PointOutcomes, event) =>
                    context.pointsWonByForehandVolleyWinner - 1,
            }),
        },
        incrementBackhandVolleyWinner: {
            actions: assign({
                pointsWonByBackhandVolleyWinner: (context: PointOutcomes, event) =>
                    context.pointsWonByBackhandVolleyWinner + 1,
            }),
        },
        decrementBackhandVolleyWinner: {
            actions: assign({
                pointsWonByBackhandVolleyWinner: (context: PointOutcomes, event) =>
                    context.pointsWonByBackhandVolleyWinner - 1,
            }),
        },
        incrementOverheadWinner: {
            actions: assign({
                pointsWonByOverheadWinner: (context: PointOutcomes, event) =>
                    context.pointsWonByOverheadWinner + 1,
            }),
        },
        decrementOverheadWinner: {
            actions: assign({
                pointsWonByOverheadWinner: (context: PointOutcomes, event) =>
                    context.pointsWonByOverheadWinner - 1,
            }),
        },
        incrementPointsWonOnServe: {
            actions: assign({
                pointsWonOnServe: (context: PointOutcomes, event) =>
                    context.pointsWonOnServe + 1,
            }),
        },
        decrementPointsWonOnServe: {
            actions: assign({
                pointsWonOnServe: (context: PointOutcomes, event) =>
                    context.pointsWonOnServe - 1,
            }),
        },
        incrementPointsWonOnReturn: {
            actions: assign({
                pointsWonOnReturn: (context: PointOutcomes, event) =>
                    context.pointsWonOnReturn + 1,
            }),
        },
        decrementPointsWonOnReturn: {
            actions: assign({
                pointsWonOnReturn: (context: PointOutcomes, event) =>
                    context.pointsWonOnReturn - 1,
            }),
        },
        incrementForehandLoss: {
            actions: assign({
                pointsLostByForehand: (context: PointOutcomes, event) =>
                    context.pointsLostByForehand + 1,
            }),
        },
        decrementForehandLoss: {
            actions: assign({
                pointsLostByForehand: (context: PointOutcomes, event) =>
                    context.pointsLostByForehand - 1,
            }),
        },
        incrementBackhandLoss: {
            actions: assign({
                pointsLostByBackhand: (context: PointOutcomes, event) =>
                    context.pointsLostByBackhand + 1,
            }),
        },
        decrementBackhandLoss: {
            actions: assign({
                pointsLostByBackhand: (context: PointOutcomes, event) =>
                    context.pointsLostByBackhand - 1,
            }),
        },
        incrementForehandVolleyLoss: {
            actions: assign({
                pointsLostByForehandVolley: (context: PointOutcomes, event) =>
                    context.pointsLostByForehandVolley + 1,
            }),
        },
        decrementForehandVolleyLoss: {
            actions: assign({
                pointsLostByForehandVolley: (context: PointOutcomes, event) =>
                    context.pointsLostByForehandVolley - 1,
            }),
        },
        incrementBackhandVolleyLoss: {
            actions: assign({
                pointsLostByBackhandVolley: (context: PointOutcomes, event) =>
                    context.pointsLostByBackhandVolley + 1,
            }),
        },
        decrementBackhandVolleyLoss: {
            actions: assign({
                pointsLostByBackhandVolley: (context: PointOutcomes, event) =>
                    context.pointsLostByBackhandVolley - 1,
            }),
        },
        incrementOverheadLoss: {
            actions: assign({
                pointsLostByOverhead: (context: PointOutcomes, event) =>
                    context.pointsLostByOverhead + 1,
            }),
        },
        decrementOverheadLoss: {
            actions: assign({
                pointsLostByOverhead: (context: PointOutcomes, event) =>
                    context.pointsLostByOverhead - 1,
            }),
        },
        incrementForehandUnforcedError: {
            actions: assign({
                pointsLostByForehandUnforcedError: (context: PointOutcomes, event) =>
                    context.pointsLostByForehandUnforcedError + 1,
            }),
        },
        decrementForehandUnforcedError: {
            actions: assign({
                pointsLostByForehandUnforcedError: (context: PointOutcomes, event) =>
                    context.pointsLostByForehandUnforcedError - 1,
            }),
        },
        incrementBackhandUnforcedError: {
            actions: assign({
                pointsLostByBackhandUnforcedError: (context: PointOutcomes, event) =>
                    context.pointsLostByBackhandUnforcedError + 1,
            }),
        },
        decrementBackhandUnforcedError: {
            actions: assign({
                pointsLostByBackhandUnforcedError: (context: PointOutcomes, event) =>
                    context.pointsLostByBackhandUnforcedError - 1,
            }),
        },
        incrementForehandVolleyUnforcedError: {
            actions: assign({
                pointsLostByForehandVolleyUnforcedError: (context: PointOutcomes, event) =>
                    context.pointsLostByForehandVolleyUnforcedError + 1,
            }),
        },
        decrementForehandVolleyUnforcedError: {
            actions: assign({
                pointsLostByForehandVolleyUnforcedError: (context: PointOutcomes, event) =>
                    context.pointsLostByForehandVolleyUnforcedError - 1,
            }),
        },
        incrementBackhandVolleyUnforcedError: {
            actions: assign({
                pointsLostByBackhandVolleyUnforcedError: (context: PointOutcomes, event) =>
                    context.pointsLostByBackhandVolleyUnforcedError + 1,
            }),
        },
        decrementBackhandVolleyUnforcedError: {
            actions: assign({
                pointsLostByBackhandVolleyUnforcedError: (context: PointOutcomes, event) =>
                    context.pointsLostByBackhandVolleyUnforcedError - 1,
            }),
        },
        incrementOverheadUnforcedError: {
            actions: assign({
                pointsLostByOverheadUnforcedError: (context: PointOutcomes, event) =>
                    context.pointsLostByOverheadUnforcedError + 1,
            }),
        },
        decrementOverheadUnforcedError: {
            actions: assign({
                pointsLostByOverheadUnforcedError: (context: PointOutcomes, event) =>
                    context.pointsLostByOverheadUnforcedError - 1,
            }),
        },
        incrementPointsLostOnServe: {
            actions: assign({
                pointsLostOnServe: (context: PointOutcomes, event) =>
                    context.pointsLostOnServe + 1,
            }),
        },
        decrementPointsLostOnServe: {
            actions: assign({
                pointsLostOnServe: (context: PointOutcomes, event) =>
                    context.pointsLostOnServe - 1,
            }),
        },
        incrementPointsLostOnReturn: {
            actions: assign({
                pointsLostOnReturn: (context: PointOutcomes, event) =>
                    context.pointsLostOnReturn + 1,
            }),
        },
        decrementPointsLostOnReturn: {
            actions: assign({
                pointsLostOnReturn: (context: PointOutcomes, event) =>
                    context.pointsLostOnReturn - 1,
            }),
        },
        incrementMissedReturns: {
            actions: assign({
                missedReturns: (context: PointOutcomes, event) =>
                    context.missedReturns + 1,
            }),
        },
        decrementMissedReturns: {
            actions: assign({
                missedReturns: (context: PointOutcomes, event) =>
                    context.missedReturns + 1,
            }),
        },
        incrementMissedFirstServes: {
            actions: assign({
                missedFirstServes: (context: PointOutcomes, event) =>
                    context.missedFirstServes + 1,
            }),
        },
        decrementMissedFirstServes: {
            actions: assign({
                missedFirstServes: (context: PointOutcomes, event) =>
                    context.missedFirstServes - 1,
            }),
        },
        incrementDoubleFaults: {
            actions: assign({
                doubleFaults: (context: PointOutcomes, event) =>
                    context.doubleFaults + 1,
            }),
        },
        decrementDoubleFaults: {
            actions: assign({
                doubleFaults: (context: PointOutcomes, event) =>
                    context.doubleFaults + 1,
            }),
        },
        incrementAcesOnFirstServe: {
            actions: assign({
                acesOnFirstServe: (context: PointOutcomes, event) =>
                    context.acesOnFirstServe + 1,
            }),
        },
        decrementAcesOnFirstServe: {
            actions: assign({
                acesOnFirstServe: (context: PointOutcomes, event) =>
                    context.acesOnFirstServe + 1,
            }),
        },
        incrementAcesOnSecondServe: {
            actions: assign({
                acesOnSecondServe: (context: PointOutcomes, event) =>
                    context.acesOnSecondServe + 1,
            }),
        },
        decrementAcesOnSecondServe: {
            actions: assign({
                acesOnSecondServe: (context: PointOutcomes, event) =>
                    context.acesOnSecondServe + 1,
            }),
        },
        incrementMadeFirstServes: {
            actions: assign({
                madeFirstServes: (context: PointOutcomes, event) =>
                    context.madeFirstServes + 1,
            }),
        },
        decrementMadeFirstServes: {
            actions: assign({
                madeFirstServes: (context: PointOutcomes, event) =>
                    context.madeFirstServes - 1,
            }),
        },
        incrementMadeSecondServes: {
            actions: assign({
                madeSecondServes: (context: PointOutcomes, event) =>
                    context.madeSecondServes + 1,
            }),
        },
        decrementMadeSecondServes: {
            actions: assign({
                madeSecondServes: (context: PointOutcomes, event) =>
                    context.madeSecondServes - 1,
            }),
        },
        incrementNotReturnedSecondServes: {
            actions: assign({
                notReturnedSecondServes: (context: PointOutcomes, event) =>
                    context.notReturnedSecondServes + 1,
            }),
        },
        decrementNotReturnedSecondServes: {
            actions: assign({
                notReturnedSecondServes: (context: PointOutcomes, event) =>
                    context.notReturnedSecondServes - 1,
            }),
        },
        incrementNotReturnedFirstServes: {
            actions: assign({
                notReturnedFirstServes: (context: PointOutcomes, event) =>
                    context.notReturnedFirstServes + 1,
            }),
        },
        decrementNotReturnedFirstServes: {
            actions: assign({
                notReturnedFirstServes: (context: PointOutcomes, event) =>
                    context.notReturnedFirstServes - 1,
            }),
        },
    },
});
