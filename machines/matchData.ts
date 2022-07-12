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
    IncrementBackhandWinner = "incrementBackhandWinner",
    IncrementForehandWinner = "incrementForehandWinner",
    IncrementBackhandVolleyWinner = "incrementBackhandVolleyWinner",
    IncrementForehandVolleyWinner = "incrementForehandVolleyWinner",
    IncrementOverheadWinner = "incrementOverheadWinner",
    IncrementPointsWonOnServe = "incrementPointsWonOnServe",
    IncrementPointsWonOnReturn = "incrementPointsWonOnReturn",
    IncrementBackhandLoss = "incrementBackhandLoss",
    IncrementForehandLoss = "incrementForehandLoss",
    IncrementBackhandVolleyLoss = "incrementBackhandVolleyLoss",
    IncrementForehandVolleyLoss = "incrementForehandVolleyLoss",
    IncrementOverheadLoss = "incrementOverheadLoss",
    IncrementBackhandUnforcedError = "incrementBackhandUnforcedError",
    IncrementForehandUnforcedError = "incrementForehandUnforcedError",
    IncrementBackhandVolleyUnforcedError = "incrementBackhandVolleyUnforcedError",
    IncrementForehandVolleyUnforcedError = "incrementForehandVolleyUnforcedError",
    IncrementOverheadUnforcedError = "incrementOverheadUnforcedError",
    IncrementPointsLostOnServe = "incrementPointsLostOnServe",
    IncrementPointsLostOnReturn = "incrementPointsLostOnReturn",
    IncrementMissedReturns = "incrementMissedReturns",
    IncrementMissedFirstServes = "incrementMissedFirstServes",
    IncrementDoubleFaults = "incrementDoubleFaults",
    IncrementAcesOnFirstServe = "incrementAcesOnFirstServe",
    IncrementAcesOnSecondServe = "incrementAcesOnSecondServe",
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
            | { type: MatchDataEvents.IncrementForehandWinner }
            | { type: MatchDataEvents.IncrementBackhandWinner }
            | { type: MatchDataEvents.IncrementForehandVolleyWinner }
            | { type: MatchDataEvents.IncrementBackhandVolleyWinner }
            | { type: MatchDataEvents.IncrementOverheadWinner }
            | { type: MatchDataEvents.IncrementPointsWonOnReturn }
            | { type: MatchDataEvents.IncrementPointsWonOnServe }
            | { type: MatchDataEvents.IncrementForehandLoss }
            | { type: MatchDataEvents.IncrementBackhandLoss }
            | { type: MatchDataEvents.IncrementForehandVolleyLoss }
            | { type: MatchDataEvents.IncrementBackhandVolleyLoss }
            | { type: MatchDataEvents.IncrementOverheadLoss }
            | { type: MatchDataEvents.IncrementForehandUnforcedError }
            | { type: MatchDataEvents.IncrementBackhandUnforcedError }
            | { type: MatchDataEvents.IncrementForehandVolleyUnforcedError }
            | { type: MatchDataEvents.IncrementBackhandVolleyUnforcedError }
            | { type: MatchDataEvents.IncrementOverheadUnforcedError }
            | { type: MatchDataEvents.IncrementPointsLostOnReturn }
            | { type: MatchDataEvents.IncrementPointsLostOnServe }
            | { type: MatchDataEvents.IncrementMissedReturns }
            | { type: MatchDataEvents.IncrementMissedFirstServes }
            | { type: MatchDataEvents.IncrementDoubleFaults }
            | { type: MatchDataEvents.IncrementAcesOnFirstServe }
            | { type: MatchDataEvents.IncrementAcesOnSecondServe },
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
        incrementForehandWinner: {
            actions: assign({
                pointsWonByForehandWinner: (context: PointOutcomes, event) =>
                    context.pointsWonByForehandWinner + 1,
            }),
        },
        incrementBackhandWinner: {
            actions: assign({
                pointsWonByBackhandWinner: (context: PointOutcomes, event) =>
                    context.pointsWonByBackhandWinner + 1,
            }),
        },
        incrementForehandVolleyWinner: {
            actions: assign({
                pointsWonByForehandVolleyWinner: (context: PointOutcomes, event) =>
                    context.pointsWonByForehandVolleyWinner + 1,
            }),
        },
        incrementBackhandVolleyWinner: {
            actions: assign({
                pointsWonByBackhandVolleyWinner: (context: PointOutcomes, event) =>
                    context.pointsWonByBackhandVolleyWinner + 1,
            }),
        },
        incrementOverheadWinner: {
            actions: assign({
                pointsWonByOverheadWinner: (context: PointOutcomes, event) =>
                    context.pointsWonByOverheadWinner + 1,
            }),
        },
        incrementPointsWonOnServe: {
            actions: assign({
                pointsWonOnServe: (context: PointOutcomes, event) =>
                    context.pointsWonOnServe + 1,
            }),
        },
        incrementPointsWonOnReturn: {
            actions: assign({
                pointsWonOnReturn: (context: PointOutcomes, event) =>
                    context.pointsWonOnReturn + 1,
            }),
        },
        incrementForehandLoss: {
            actions: assign({
                pointsLostByForehand: (context: PointOutcomes, event) =>
                    context.pointsLostByForehand + 1,
            }),
        },
        incrementBackhandLoss: {
            actions: assign({
                pointsLostByBackhand: (context: PointOutcomes, event) =>
                    context.pointsLostByBackhand + 1,
            }),
        },
        incrementForehandVolleyLoss: {
            actions: assign({
                pointsLostByForehandVolley: (context: PointOutcomes, event) =>
                    context.pointsLostByForehandVolley + 1,
            }),
        },
        incrementBackhandVolleyLoss: {
            actions: assign({
                pointsLostByBackhandVolley: (context: PointOutcomes, event) =>
                    context.pointsLostByBackhandVolley + 1,
            }),
        },
        incrementOverheadLoss: {
            actions: assign({
                pointsLostByOverhead: (context: PointOutcomes, event) =>
                    context.pointsLostByOverhead + 1,
            }),
        },
        incrementForehandUnforcedError: {
            actions: assign({
                pointsLostByForehandUnforcedError: (context: PointOutcomes, event) =>
                    context.pointsLostByForehandUnforcedError + 1,
            }),
        },
        incrementBackhandUnforcedError: {
            actions: assign({
                pointsLostByBackhandUnforcedError: (context: PointOutcomes, event) =>
                    context.pointsLostByBackhandUnforcedError + 1,
            }),
        },
        incrementForehandVolleyUnforcedError: {
            actions: assign({
                pointsLostByForehandVolleyUnforcedError: (context: PointOutcomes, event) =>
                    context.pointsLostByForehandVolleyUnforcedError + 1,
            }),
        },
        incrementBackhandVolleyUnforcedError: {
            actions: assign({
                pointsLostByBackhandVolleyUnforcedError: (context: PointOutcomes, event) =>
                    context.pointsLostByBackhandVolleyUnforcedError + 1,
            }),
        },
        incrementOverheadUnforcedError: {
            actions: assign({
                pointsLostByOverheadUnforcedError: (context: PointOutcomes, event) =>
                    context.pointsLostByOverheadUnforcedError + 1,
            }),
        },
        incrementPointsLostOnServe: {
            actions: assign({
                pointsLostOnServe: (context: PointOutcomes, event) =>
                    context.pointsLostOnServe + 1,
            }),
        },
        incrementPointsLostOnReturn: {
            actions: assign({
                pointsLostOnReturn: (context: PointOutcomes, event) =>
                    context.pointsLostOnReturn + 1,
            }),
        },
        incrementMissedReturns: {
            actions: assign({
                missedReturns: (context: PointOutcomes, event) =>
                    context.missedReturns + 1,
                pointsLostOnReturn: (context: PointOutcomes, event) =>
                    context.pointsLostOnReturn + 1,
            }),
        },
        incrementMissedFirstServes: {
            actions: assign({
                missedFirstServes: (context: PointOutcomes, event) =>
                    context.missedFirstServes + 1,
            }),
        },
        incrementDoubleFaults: {
            actions: assign({
                doubleFaults: (context: PointOutcomes, event) =>
                    context.doubleFaults + 1,
                pointsLostOnServe: (context: PointOutcomes, event) =>
                    context.pointsLostOnServe + 1,
            }),
        },
        incrementAcesOnFirstServe: {
            actions: assign({
                acesOnFirstServe: (context: PointOutcomes, event) =>
                    context.acesOnFirstServe + 1,
                pointsWonOnServe: (context: PointOutcomes, event) =>
                    context.pointsWonOnServe + 1,
            }),
        },
        incrementAcesOnSecondServe: {
            actions: assign({
                acesOnSecondServe: (context: PointOutcomes, event) =>
                    context.acesOnSecondServe + 1,
                pointsWonOnServe: (context: PointOutcomes, event) =>
                    context.pointsWonOnServe + 1,
            }),
        },
    },
});
