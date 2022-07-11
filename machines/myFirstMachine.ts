import { assign, createMachine } from "xstate";

interface CounterContext {
  count: number;
}

export const myMachine = createMachine({
  schema: {
    context: {} as CounterContext,
  },
  // ...
  context: {
    count: 0,
  },
  on: {
    INCREMENT: {
      actions: assign({
        count: (context: CounterContext, event) => context.count + 1,
      }),
    },
  },
});
