import { assign, createMachine } from "xstate";

interface PointOutcomes {
  pointsWonByForehand: number;
  pointsWonByBackhand: number;
  pointsWonByForehandVolley: number;
  pointsWonByBackhandVolley: number;
  pointsWonByOverhead: number;
}

export enum MatchDataEvents {
  IncrementBackhand = "incrementBackhand",
  IncrementForehand = "incrementForehand",
  IncrementBackhandVolley = "incrementBackhandVolley",
  IncrementForehandVolley = "incrementForehandVolley",
  IncrementOverhead = "incrementOverhead",
}

export const matchData = createMachine({
  schema: {
    context: {} as PointOutcomes,
    events: {} as
      | { type: MatchDataEvents.IncrementForehand }
      | { type: MatchDataEvents.IncrementBackhand }
      | { type: MatchDataEvents.IncrementForehandVolley }
      | { type: MatchDataEvents.IncrementBackhandVolley }
      | { type: MatchDataEvents.IncrementOverhead },
  },
  context: {
    pointsWonByForehand: 0,
    pointsWonByBackhand: 0,
    pointsWonByForehandVolley: 0,
    pointsWonByBackhandVolley: 0,
    pointsWonByOverhead: 0,
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
  },
});
