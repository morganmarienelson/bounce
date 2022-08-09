import {assign, createMachine} from "xstate";
import {PointOutcomes} from "../types/pointOutcomes";

export const matchData = createMachine({
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
        missedFirstServeReturns: 0,
        missedSecondServeReturns: 0,
        missedFirstServes: 0,
        doubleFaults: 0,
        acesOnFirstServe: 0,
        acesOnSecondServe: 0,
        madeFirstServes: 0,
        madeSecondServes: 0,
        notReturnedFirstServes: 0,
        notReturnedSecondServes: 0,
        notReturnedServesDeuceSide: 0,
        notReturnedServesAdSide: 0,
        notReturnedServesToAlley: 0,
        notReturnedServesToBody: 0,
        notReturnedServesToCenter: 0,
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
                pointsLostByForehandVolleyUnforcedError: (
                    context: PointOutcomes,
                    event
                ) => context.pointsLostByForehandVolleyUnforcedError + 1,
            }),
        },
        decrementForehandVolleyUnforcedError: {
            actions: assign({
                pointsLostByForehandVolleyUnforcedError: (
                    context: PointOutcomes,
                    event
                ) => context.pointsLostByForehandVolleyUnforcedError - 1,
            }),
        },
        incrementBackhandVolleyUnforcedError: {
            actions: assign({
                pointsLostByBackhandVolleyUnforcedError: (
                    context: PointOutcomes,
                    event
                ) => context.pointsLostByBackhandVolleyUnforcedError + 1,
            }),
        },
        decrementBackhandVolleyUnforcedError: {
            actions: assign({
                pointsLostByBackhandVolleyUnforcedError: (
                    context: PointOutcomes,
                    event
                ) => context.pointsLostByBackhandVolleyUnforcedError - 1,
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
        incrementMissedFirstServeReturns: {
            actions: assign({
                missedFirstServeReturns: (context: PointOutcomes, event) =>
                    context.missedFirstServeReturns + 1,
            }),
        },
        decrementMissedFirstServeReturns: {
            actions: assign({
                missedFirstServeReturns: (context: PointOutcomes, event) =>
                    context.missedFirstServeReturns - 1,
            }),
        },
        incrementMissedSecondServeReturns: {
            actions: assign({
                missedSecondServeReturns: (context: PointOutcomes, event) =>
                    context.missedSecondServeReturns + 1,
            }),
        },
        decrementMissedSecondServeReturns: {
            actions: assign({
                missedSecondServeReturns: (context: PointOutcomes, event) =>
                    context.missedSecondServeReturns - 1,
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
                    context.doubleFaults - 1,
            }),
        },
        incrementAcesOnFirstServe: {
            actions: assign({
                acesOnFirstServe: (context: PointOutcomes, event) =>
                    context.acesOnFirstServe + 1,
                pointsWonOnServe: (context: PointOutcomes, event) =>
                    context.pointsWonOnServe + 1,
                madeFirstServes: (context: PointOutcomes, event) =>
                    context.madeFirstServes + 1,
            }),
        },
        decrementAcesOnFirstServe: {
            actions: assign({
                acesOnFirstServe: (context: PointOutcomes, event) =>
                    context.acesOnFirstServe - 1,
                pointsWonOnServe: (context: PointOutcomes, event) =>
                    context.pointsWonOnServe - 1,
                madeFirstServes: (context: PointOutcomes, event) =>
                    context.madeFirstServes - 1,
            }),
        },
        incrementAcesOnSecondServe: {
            actions: assign({
                acesOnSecondServe: (context: PointOutcomes, event) =>
                    context.acesOnSecondServe + 1,
                pointsWonOnServe: (context: PointOutcomes, event) =>
                    context.pointsWonOnServe + 1,
                madeSecondServes: (context: PointOutcomes, event) =>
                    context.madeSecondServes + 1,
            }),
        },
        decrementAcesOnSecondServe: {
            actions: assign({
                acesOnSecondServe: (context: PointOutcomes, event) =>
                    context.acesOnSecondServe - 1,
                pointsWonOnServe: (context: PointOutcomes, event) =>
                    context.pointsWonOnServe - 1,
                madeSecondServes: (context: PointOutcomes, event) =>
                    context.madeSecondServes - 1,
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
                pointsWonOnServe: (context: PointOutcomes, event) =>
                    context.pointsWonOnServe + 1,
                madeSecondServes: (context: PointOutcomes, event) =>
                    context.madeSecondServes + 1,
            }),
        },
        decrementNotReturnedSecondServes: {
            actions: assign({
                notReturnedSecondServes: (context: PointOutcomes, event) =>
                    context.notReturnedSecondServes - 1,
                pointsWonOnServe: (context: PointOutcomes, event) =>
                    context.pointsWonOnServe - 1,
                madeSecondServes: (context: PointOutcomes, event) =>
                    context.madeSecondServes - 1,
            }),
        },
        incrementNotReturnedFirstServes: {
            actions: assign({
                notReturnedFirstServes: (context: PointOutcomes, event) =>
                    context.notReturnedFirstServes + 1,
                pointsWonOnServe: (context: PointOutcomes, event) =>
                    context.pointsWonOnServe + 1,
                madeFirstServes: (context: PointOutcomes, event) =>
                    context.madeFirstServes + 1,
            }),
        },
        decrementNotReturnedFirstServes: {
            actions: assign({
                notReturnedFirstServes: (context: PointOutcomes, event) =>
                    context.notReturnedFirstServes - 1,
                pointsWonOnServe: (context: PointOutcomes, event) =>
                    context.pointsWonOnServe - 1,
                madeFirstServes: (context: PointOutcomes, event) =>
                    context.madeFirstServes - 1,
            }),
        },
        incrementNotReturnedServesDeuceSide: {
            actions: assign({
                notReturnedServesDeuceSide: (context: PointOutcomes, event) =>
                    context.notReturnedServesDeuceSide + 1,
            }),
        },
        decrementNotReturnedServesDeuceSide: {
            actions: assign({
                notReturnedServesDeuceSide: (context: PointOutcomes, event) =>
                    context.notReturnedServesDeuceSide - 1,
            }),
        },
        incrementNotReturnedServesAdSide: {
            actions: assign({
                notReturnedServesAdSide: (context: PointOutcomes, event) =>
                    context.notReturnedServesAdSide + 1,
            }),
        },
        decrementNotReturnedServesAdSide: {
            actions: assign({
                notReturnedServesAdSide: (context: PointOutcomes, event) =>
                    context.notReturnedServesAdSide - 1,
            }),
        },
        incrementNotReturnedServesToBody: {
            actions: assign({
                notReturnedServesToBody: (context: PointOutcomes, event) =>
                    context.notReturnedServesToBody + 1,
            }),
        },
        decrementNotReturnedServesToBody: {
            actions: assign({
                notReturnedServesToBody: (context: PointOutcomes, event) =>
                    context.notReturnedServesToBody - 1,
            }),
        },
        incrementNotReturnedServesToCenter: {
            actions: assign({
                notReturnedServesToCenter: (context: PointOutcomes, event) =>
                    context.notReturnedServesToCenter + 1,
            }),
        },
        decrementNotReturnedServesToCenter: {
            actions: assign({
                notReturnedServesToBody: (context: PointOutcomes, event) =>
                    context.notReturnedServesToCenter - 1,
            }),
        },
        incrementNotReturnedServesToAlley: {
            actions: assign({
                notReturnedServesToAlley: (context: PointOutcomes, event) =>
                    context.notReturnedServesToAlley + 1,
            }),
        },
        decrementNotReturnedServesToAlley: {
            actions: assign({
                notReturnedServesToAlley: (context: PointOutcomes, event) =>
                    context.notReturnedServesToAlley - 1,
            }),
        },
    },
});

