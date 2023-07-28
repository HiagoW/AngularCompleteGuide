import { Action, createAction, props } from "@ngrx/store";

export const increment = createAction(
    '[Counter] Increment',
    props<{value: number}>()
);

export const decrement = createAction(
    '[Counter] Decrement'
);

// Older approach
// export const INCREMENT = '[Counter] Increment';
// export class IncrementAction implements Action {
//     readonly type = INCREMENT;

//     constructor(public value: number) {}
// }

// To add more Actions: IncrementAction | DecrementAction
// export type CounterActions = IncrementAction;