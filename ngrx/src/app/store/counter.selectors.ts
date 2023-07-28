import { createSelector } from "@ngrx/store";

// state should be same form as overall store and its returns
export const selectCount = (state: {counter: number}) => state.counter;
export const selectDoubleCount = createSelector(
    selectCount,
    // input is the return of previous selector
    (state) => state * 2
);