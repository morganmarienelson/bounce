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
}

export enum MatchDataEvents {
    IncrementBackhand = "incrementBackhand",
    IncrementForehand = "incrementForehand",
    IncrementBackhandVolley = "incrementBackhandVolley",
    IncrementForehandVolley = "incrementForehandVolley",
    IncrementOverhead = "incrementOverhead",
    IncrementBackhandWinner = "incrementBackhandWinner",
    IncrementForehandWinner = "incrementForehandWinner",
    IncrementBackhandVolleyWinner = "incrementBackhandVolleyWinner",
    IncrementForehandVolleyWinner = "incrementForehandVolleyWinner",
    IncrementOverheadWinner = "incrementOverheadWinner",
}

export const matchData = createMachine({
    schema: {
        context: {} as PointOutcomes,
        events: {} as
            | { type: MatchDataEvents.IncrementForehand }
            | { type: MatchDataEvents.IncrementBackhand }
            | { type: MatchDataEvents.IncrementForehandVolley }
            | { type: MatchDataEvents.IncrementBackhandVolley }
            | { type: MatchDataEvents.IncrementOverhead }
            | { type: MatchDataEvents.IncrementForehandWinner }
            | { type: MatchDataEvents.IncrementBackhandWinner }
            | { type: MatchDataEvents.IncrementForehandVolleyWinner }
            | { type: MatchDataEvents.IncrementBackhandVolleyWinner }
            | { type: MatchDataEvents.IncrementOverheadWinner },
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
    },
    on: {
        incrementForehand: {
            actions: assign({
                pointsWonByForehand: (context: PointOutcomes, event) =>
                    context.pointsWonByForehand + 1,
            }),
        },
        incrementBackhand: {
            actions: assign({
                pointsWonByBackhand: (context: PointOutcomes, event) =>
                    context.pointsWonByBackhand + 1,
            }),
        },
        incrementForehandVolley: {
            actions: assign({
                pointsWonByForehandVolley: (context: PointOutcomes, event) =>
                    context.pointsWonByForehandVolley + 1,
            }),
        },
        incrementBackhandVolley: {
            actions: assign({
                pointsWonByBackhandVolley: (context: PointOutcomes, event) =>
                    context.pointsWonByBackhandVolley + 1,
            }),
        },
        incrementOverhead: {
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
    },
});
