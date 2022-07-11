import { assign, createMachine } from "xstate";

interface CounterContext {
  totalPointsWon: number;
  pointsWonByWinner: number;
  winnersAtNet: number;
  pointsWonByForehand: number;
  pointsWonByBackhand: number;
  pointsWonByForehandVolley: number;
  pointsWonByBackhandVolley: number;
  pointsWonByOverhead: number;
}

export const totalPointsWon = createMachine({
  schema: {
    context: {} as CounterContext,
    events: {} as
      | { type: "incrementTotalPoints" }
      | { type: "incrementWinners" },
  },
  context: {
    totalPointsWon: 0,
    pointsWonByWinner: 0,
    winnersAtNet: 0,
    pointsWonByForehand: 0,
    pointsWonByBackhand: 0,
    pointsWonByForehandVolley: 0,
    pointsWonByBackhandVolley: 0,
    pointsWonByOverhead: 0,
  },
  on: {
    incrementTotalPoints: {
      actions: assign({
        totalPointsWon: (context: CounterContext, event) =>
          context.totalPointsWon + 1,
      }),
    },
    incrementWinners: {
      actions: assign({
        pointsWonByWinner: (context: CounterContext, event) =>
          context.pointsWonByWinner + 1,
      }),
    },
  },
});
